import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Eye, Heart, Linkedin, Mail, Twitter, Award, Users, TrendingUp, Globe } from "lucide-react"

export const metadata = {
  title: "About Us | SwiftHaul Logistics",
  description: "Learn about SwiftHaul Logistics - our mission, values, and the founder behind our success.",
}

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide exceptional transport and contracting services that exceed expectations, building lasting partnerships with our clients through reliability and excellence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted name in logistics and contracting, setting the industry standard for quality, innovation, and customer satisfaction.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, reliability, and customer-first thinking guide every decision we make. We believe in transparency and building trust with every interaction.",
  },
]

const achievements = [
  {
    icon: Award,
    value: "15+",
    label: "Industry Awards",
    description: "Recognized for excellence in logistics",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Businesses trust us with their logistics",
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Success Rate",
    description: "On-time delivery guaranteed",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Cities Covered",
    description: "Nationwide network coverage",
  },
]

const milestones = [
  { year: "2018", event: "Company Founded", description: "SwiftHaul Logistics was established by Haiqa Ashfaq with a vision to revolutionize logistics." },
  { year: "2019", event: "First Major Contract", description: "Secured our first enterprise contract, serving over 50 businesses." },
  { year: "2020", event: "Fleet Expansion", description: "Expanded our fleet to 25 vehicles, enhancing delivery capabilities." },
  { year: "2021", event: "Contracting Division", description: "Launched our general contracting services division." },
  { year: "2022", event: "500+ Clients", description: "Reached the milestone of serving over 500 satisfied business clients." },
  { year: "2024", event: "Industry Leader", description: "Recognized as a leading transport and contracting company in the region." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                About SwiftHaul Logistics
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                We are a leading transport and contracting company dedicated to providing 
                exceptional services with integrity and professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/fleet.jpg"
                  alt="SwiftHaul Logistics fleet"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2018, SwiftHaul Logistics began with a simple mission: to provide 
                    reliable, efficient, and customer-focused transport services. What started as 
                    a small operation with just a handful of vehicles has grown into a comprehensive 
                    logistics and contracting company.
                  </p>
                  <p>
                    Today, we proudly serve hundreds of clients across the nation, delivering 
                    excellence with every shipment. Our growth is a testament to our commitment 
                    to quality and the trust our clients place in us.
                  </p>
                  <p>
                    We have expanded our services to include general contracting, warehouse 
                    solutions, and specialized freight handling, making us your one-stop solution 
                    for all logistics needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent-foreground">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-accent-foreground">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xs text-accent-foreground/70">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Drives Us
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet The Founder
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                The visionary leader behind SwiftHaul&apos;s success story.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/images/team-haiqa.jpg"
                      alt="Haiqa Ashfaq - Founder & CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      Haiqa Ashfaq
                    </h3>
                    <p className="text-accent font-semibold mt-2 text-lg">
                      Founder & Chief Executive Officer
                    </p>
                    <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        With a passion for logistics and a vision for excellence, Haiqa Ashfaq 
                        founded SwiftHaul Logistics in 2018. Her leadership has transformed the company 
                        from a small startup into a trusted industry leader.
                      </p>
                      <p>
                        Under her guidance, SwiftHaul has expanded its services, built a 
                        modern fleet, and established partnerships with over 500 businesses 
                        nationwide. Haiqa believes in putting customers first and building 
                        relationships based on trust and reliability.
                      </p>
                      <p>
                        Her innovative approach to logistics and commitment to sustainability 
                        has earned SwiftHaul numerous industry accolades and a reputation 
                        for excellence.
                      </p>
                    </div>
                    <div className="flex gap-3 mt-8">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" 
                        aria-label="Connect with Haiqa on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" 
                        aria-label="Follow Haiqa on Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" 
                        aria-label="Email Haiqa"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Journey
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to industry leadership - our story of growth and success.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />
                
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                      <div className="bg-card p-6 rounded-xl shadow-lg">
                        <span className="text-accent font-bold text-lg">{milestone.year}</span>
                        <h3 className="text-foreground font-semibold mt-1">{milestone.event}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Why Partner With SwiftHaul?
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We understand that choosing the right logistics partner is crucial for your 
                  business success. Here&apos;s why hundreds of companies trust us with their 
                  transport and contracting needs.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    { title: "Proven Track Record", desc: "Years of successful deliveries and satisfied clients" },
                    { title: "Modern Technology", desc: "Real-time tracking and advanced logistics systems" },
                    { title: "Dedicated Support", desc: "24/7 customer service and dedicated account managers" },
                    { title: "Competitive Pricing", desc: "Transparent pricing with no hidden fees" },
                    { title: "Eco-Friendly Practices", desc: "Committed to sustainable and green logistics" },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/warehouse.jpg"
                  alt="SwiftHaul Logistics warehouse facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Join Our Journey
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Partner with SwiftHaul Logistics and experience the difference that 
              dedication and expertise can make for your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
