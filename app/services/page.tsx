import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Truck, 
  Warehouse, 
  HardHat, 
  Package, 
  Shield, 
  Clock, 
  MapPin, 
  CheckCircle 
} from "lucide-react"

export const metadata = {
  title: "Our Services | SwiftHaul Logistics",
  description: "Discover our comprehensive transport and contracting services - vehicle transport, freight logistics, warehouse solutions, and general contracting.",
}

const services = [
  {
    id: "vehicle-transport",
    icon: Truck,
    title: "Vehicle Transport",
    description: "Safe and reliable transportation for all types of vehicles across the nation.",
    image: "/images/hero-truck.jpg",
    features: [
      "Open and enclosed transport options",
      "Door-to-door delivery service",
      "Real-time GPS tracking",
      "Comprehensive insurance coverage",
      "Licensed and bonded carriers",
      "Express and standard shipping"
    ]
  },
  {
    id: "freight-logistics",
    icon: Package,
    title: "Freight Logistics",
    description: "End-to-end freight solutions for businesses of all sizes.",
    image: "/images/cargo.jpg",
    features: [
      "Full truckload (FTL) shipping",
      "Less than truckload (LTL) options",
      "Refrigerated transport available",
      "Cross-docking services",
      "Supply chain optimization",
      "Dedicated fleet services"
    ]
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehouse Solutions",
    description: "Secure storage and efficient inventory management for your goods.",
    image: "/images/warehouse.jpg",
    features: [
      "Climate-controlled storage",
      "Inventory management systems",
      "Pick and pack services",
      "Distribution center operations",
      "24/7 security monitoring",
      "Flexible storage terms"
    ]
  },
  {
    id: "contracting",
    icon: HardHat,
    title: "General Contracting",
    description: "Professional contracting services for commercial and industrial projects.",
    image: "/images/contracting.jpg",
    features: [
      "Commercial construction",
      "Industrial facility setup",
      "Renovation and remodeling",
      "Project management",
      "Site preparation",
      "Equipment installation"
    ]
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete coverage for peace of mind"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance"
  },
  {
    icon: MapPin,
    title: "Nationwide",
    description: "Service across all 50 states"
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Our Services
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                We provide a comprehensive range of transport and contracting services 
                tailored to meet your unique business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-8 bg-accent">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-center gap-3">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  <div>
                    <div className="font-semibold text-accent-foreground">{benefit.title}</div>
                    <div className="text-sm text-accent-foreground/80">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Cards Overview */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Quick Service Overview
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Select the service that best fits your needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Link 
                      href={`#${service.id}`}
                      className="inline-flex items-center text-accent font-medium mt-4 text-sm hover:underline"
                    >
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
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
              Contact us today for a customized quote tailored to your specific needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
