"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@swifthaul.com", "support@swifthaul.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Transport Way", "Logistics City, LC 12345"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Have questions or need a quote? We&apos;re here to help. 
                Reach out to us and we&apos;ll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out to us through any of the following channels. 
                  Our team is ready to assist you.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Thank You!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Your message has been sent successfully. We&apos;ll get back to you shortly.
                        </p>
                        <Button 
                          onClick={() => setIsSubmitted(false)}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold text-foreground mb-6">
                          Request a Quote
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                                className="bg-secondary"
                              />
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
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
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
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="service">Service Interested In</Label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full h-10 px-3 rounded-md bg-secondary border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                              <option value="">Select a service</option>
                              <option value="vehicle-transport">Vehicle Transport</option>
                              <option value="freight-logistics">Freight Logistics</option>
                              <option value="warehouse">Warehouse Solutions</option>
                              <option value="contracting">General Contracting</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Your Message *</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your requirements..."
                              rows={5}
                              required
                              className="bg-secondary resize-none"
                            />
                          </div>

                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              "Sending..."
                            ) : (
                              <>
                                Send Message
                                <Send className="ml-2 w-5 h-5" />
                              </>
                            )}
                          </Button>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[400px] bg-secondary">
          <Image
            src="/images/fleet.jpg"
            alt="SwiftHaul Logistics Location"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="border-0 shadow-xl max-w-md mx-4">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Visit Our Headquarters
                </h3>
                <p className="text-muted-foreground">
                  123 Transport Way<br />
                  Logistics City, LC 12345
                </p>
                <Button 
                  className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
