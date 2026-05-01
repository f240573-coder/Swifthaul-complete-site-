"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Truck, 
  CheckCircle,
  Eye,
  EyeOff
} from "lucide-react"

const benefits = [
  "Track your shipments in real-time",
  "Access exclusive member discounts",
  "Manage all your bookings in one place",
  "Priority customer support",
  "Instant quote generation",
  "Digital documentation and invoices"
]

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    newsletter: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    if (!formData.agreeTerms) {
      setError("Please agree to the terms and conditions")
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
    setError("")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Create an Account
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Join SwiftHaul Logistics and unlock a world of seamless logistics solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Why Create an Account?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Becoming a SwiftHaul member gives you access to exclusive features 
                  and benefits designed to make your logistics experience seamless.
                </p>
                
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 p-6 bg-secondary rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">Already have an account?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sign in to access your dashboard and manage your shipments.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Sign In</Link>
                  </Button>
                </div>
              </div>

              {/* Signup Form */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Welcome Aboard!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Your account has been created successfully. Check your email to verify your account.
                      </p>
                      <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/">Return to Home</Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-foreground mb-6">
                        Sign Up
                      </h2>
                      
                      {error && (
                        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="John"
                              required
                              className="bg-secondary"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Doe"
                              required
                              className="bg-secondary"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="bg-secondary"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your Company"
                              className="bg-secondary"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 000-0000"
                              className="bg-secondary"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password">Password *</Label>
                          <div className="relative">
                            <Input
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="Min. 8 characters"
                              required
                              className="bg-secondary pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password *</Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required
                            className="bg-secondary"
                          />
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="agreeTerms"
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onCheckedChange={(checked) => 
                                setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
                              }
                              className="mt-1"
                            />
                            <Label htmlFor="agreeTerms" className="text-sm text-muted-foreground font-normal cursor-pointer">
                              I agree to the{" "}
                              <Link href="/terms" className="text-accent hover:underline">
                                Terms of Service
                              </Link>
                              {" "}and{" "}
                              <Link href="/privacy" className="text-accent hover:underline">
                                Privacy Policy
                              </Link>
                            </Label>
                          </div>

                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="newsletter"
                              name="newsletter"
                              checked={formData.newsletter}
                              onCheckedChange={(checked) => 
                                setFormData(prev => ({ ...prev, newsletter: checked as boolean }))
                              }
                              className="mt-1"
                            />
                            <Label htmlFor="newsletter" className="text-sm text-muted-foreground font-normal cursor-pointer">
                              Subscribe to our newsletter for updates and offers
                            </Label>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Creating Account..." : "Create Account"}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
