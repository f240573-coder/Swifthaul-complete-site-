import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Shield, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Nationwide Coverage",
    description: "Our extensive network ensures timely deliveries across the country with real-time tracking.",
  },
  {
    icon: Shield,
    title: "Secure Transport",
    description: "Your cargo is protected with comprehensive insurance and state-of-the-art security measures.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on punctuality, ensuring your shipments arrive exactly when expected.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced professionals handle every shipment with care and precision.",
  },
]

const stats = [
  { value: "15K+", label: "Deliveries Completed" },
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Fleet Vehicles" },
  { value: "99%", label: "On-Time Rate" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-truck.jpg"
              alt="Swift Move Transport truck on highway"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Moving Your Business{" "}
                <span className="text-accent">Forward</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Your trusted partner for seamless vehicle transport and general contracting services. 
                We deliver excellence with every mile.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/services">
                    Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
   <Button
  asChild
  size="lg"
  className="bg-accent hover:bg-accent/90 text-accent-foreground"
>
  <Link href="/contact">Get a Quote</Link>
</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm md:text-base text-accent-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose SwiftHaul?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We combine industry expertise with cutting-edge technology to deliver 
                unparalleled transport and contracting solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/fleet.jpg"
                  alt="Swift Move Transport fleet"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  A Legacy of Excellence in Transport
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  With years of experience in the logistics industry, SwiftHaul Logistics has 
                  established itself as a leader in vehicle transport and general contracting. 
                  Our commitment to quality and customer satisfaction drives everything we do.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Professional and experienced drivers",
                    "Modern fleet with GPS tracking",
                    "Comprehensive insurance coverage",
                    "24/7 customer support"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Services
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Comprehensive transport and contracting solutions tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative h-[350px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-truck.jpg"
                  alt="Vehicle Transport"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/70 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Vehicle Transport
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Safe and reliable vehicle transportation across the nation.
                  </p>
                </div>
              </div>

              <div className="group relative h-[350px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/warehouse.jpg"
                  alt="Warehouse Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/70 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Warehouse Solutions
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Secure storage and efficient inventory management.
                  </p>
                </div>
              </div>

              <div className="group relative h-[350px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/contracting.jpg"
                  alt="General Contracting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/70 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    General Contracting
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Professional contracting services for your projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Contact us today for a free quote and discover how SwiftHaul 
              can help move your business forward.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/signup">Create Account</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
