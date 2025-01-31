import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="font-bold text-xl">
                <Image src="/placeholder.svg" alt="ABC News" width={100} height={40} className="h-8 w-auto" />
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="#" className="text-sm font-medium hover:text-primary">
                  Video
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary">
                  Live
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary">
                  Shows
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary">
                  538
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary">
                  Shop
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
              <Button className="hidden md:inline-flex bg-[#012169] text-white hover:bg-[#012169]/90">
                Stream on hulu
              </Button>
            </div>
          </div>
        </div>
        {/* Live Updates Bar */}
        <div className="border-t overflow-x-auto whitespace-nowrap">
          <div className="container mx-auto px-4">
            <div className="flex items-center h-10 gap-4">
              <Badge variant="destructive" className="rounded-sm">
                Live Updates
              </Badge>
              <Link href="#" className="text-sm hover:text-primary">
                DC plane crash
              </Link>
              <span className="text-muted-foreground">|</span>
              <Badge variant="secondary" className="rounded-sm">
                Latest
              </Badge>
              <Link href="#" className="text-sm hover:text-primary">
                Hostages released
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="#" className="text-sm hover:text-primary">
                DC plane crash victims
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="#" className="text-sm hover:text-primary">
                Handgun sales
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Featured Story */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%206.13.51%E2%80%AFAM-oRzsAGJVsWvcN0ZWgEVvnh4jOwIhhZ.png"
              alt="Featured news"
              width={800}
              height={450}
              className="rounded-lg object-cover w-full aspect-video"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">U.S.</Badge>
                <span className="text-sm text-muted-foreground">3 hours ago</span>
              </div>
              <h1 className="text-2xl font-bold hover:text-primary">
                <Link href="#">DC plane crash: Similar tragedy happened 43 years ago</Link>
              </h1>
              <p className="text-muted-foreground">
                Breaking news coverage of significant events unfolding in the nation's capital...
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="News thumbnail"
                  width={200}
                  height={120}
                  className="rounded object-cover aspect-video w-[200px]"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Politics</Badge>
                  </div>
                  <h3 className="font-semibold hover:text-primary line-clamp-2">
                    <Link href="#">Related Breaking News Story {i}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Quick summary of the breaking news story and its significance...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Videos */}
        <section className="mb-12 bg-[#012169] text-white -mx-4 px-4 py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Trending Videos</h2>
            <div className="flex gap-2">
              <Button variant="secondary" size="icon" className="rounded-full">
                <span className="sr-only">Previous</span>
                &larr;
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <span className="sr-only">Next</span>
                &rarr;
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Video thumbnail"
                    width={400}
                    height={225}
                    className="rounded object-cover aspect-video"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs">2:53</div>
                </div>
                <h3 className="font-semibold hover:text-primary/90">Video Title {i}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Category Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Politics Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Politics</h2>
              <Link href="#" className="text-primary hover:underline">
                &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%206.14.08%E2%80%AFAM-FxWsYmuWc45M8VgJ2HIXK27AZiai5h.png"
                alt="Politics news"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-video"
              />
              <h3 className="font-semibold hover:text-primary">
                <Link href="#">Major Political Development</Link>
              </h3>
              <div className="space-y-4 text-sm">
                {[1, 2, 3].map((i) => (
                  <Link key={i} href="#" className="block hover:text-primary">
                    Political Update {i}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* International Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">International</h2>
              <Link href="#" className="text-primary hover:underline">
                &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg"
                alt="International news"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-video"
              />
              <h3 className="font-semibold hover:text-primary">
                <Link href="#">Global News Development</Link>
              </h3>
              <div className="space-y-4 text-sm">
                {[1, 2, 3].map((i) => (
                  <Link key={i} href="#" className="block hover:text-primary">
                    International Update {i}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* FiveThirtyEight Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/placeholder.svg" alt="538" width={40} height={40} className="h-8 w-auto" />
            <h2 className="text-xl font-bold">FiveThirtyEight</h2>
            <Link href="#" className="text-primary hover:underline">
              &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%206.14.40%E2%80%AFAM-w851Z1eO87HRdxInKdLqU1F8BgCitC.png"
                alt="538 analysis"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-video"
              />
              <h3 className="font-semibold hover:text-primary">
                <Link href="#">How Americans feel about Republicans' proposed health care cuts</Link>
              </h3>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg"
                alt="538 analysis"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-video"
              />
              <h3 className="font-semibold hover:text-primary">
                <Link href="#">What polling tells us about Americans' support for Trump's mass deportations</Link>
              </h3>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">Latest from 538</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Introducing 538's presidential approval polling average for Donald Trump",
                "What we saw during Trump's first week in office",
                "What Trump's bid to end birthright citizenship could mean for the country",
                "What the polls say about Trump's executive actions",
              ].map((title, i) => (
                <div key={i} className="space-y-2">
                  <Image
                    src="/placeholder.svg"
                    alt={title}
                    width={300}
                    height={200}
                    className="rounded object-cover aspect-video w-full"
                  />
                  <h5 className="text-sm font-medium hover:text-primary">
                    <Link href="#">{title}</Link>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Good Morning America Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-bold text-[#012169]">GMA</h2>
            <span className="font-medium">Good Morning America</span>
            <Link href="#" className="text-primary hover:underline">
              &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              "Kylie Kelce weighs rooting for Chiefs or Eagles in upcoming Super Bowl",
              "Dwyane Wade shares he had a cancerous tumor removed from his kidney",
              "Michael Strahan says daughter's cancer diagnosis was 'every parent's worst nightmare'",
            ].map((title, i) => (
              <div key={i} className="space-y-3">
                <Image
                  src="/placeholder.svg"
                  alt={title}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-video"
                />
                <h3 className="font-semibold hover:text-primary">
                  <Link href="#">{title}</Link>
                </h3>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Latest from GMA</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Stand-up comedian Ken Flores dies at 28: 'We lost a good one'",
                "Cronut creator teams up with Honey Bunches of Oats to launch new flavor",
                "Lily Collins shares sweet birthday message for dad Phil Collins",
                "Kristen Stewart, Steven Yeun on exploring humanity as AI robots in new film 'Love Me'",
              ].map((title, i) => (
                <div key={i} className="space-y-2">
                  <Image
                    src="/placeholder.svg"
                    alt={title}
                    width={300}
                    height={200}
                    className="rounded object-cover aspect-video w-full"
                  />
                  <h5 className="text-sm font-medium hover:text-primary">
                    <Link href="#">{title}</Link>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section className="mb-12 bg-[#012169] text-white -mx-4 px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">Shop</h2>
              <Image src="/placeholder.svg" alt="ABC News" width={60} height={30} className="h-6 w-auto" />
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="icon" className="rounded-full">
                <span className="sr-only">Previous</span>
                &larr;
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <span className="sr-only">Next</span>
                &rarr;
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "How to choose the best tax software for you in 2025",
              "13 watches to shop for style and function while checking the time",
              "Shop these top essentials to tackle winter with ease",
            ].map((title, i) => (
              <div key={i} className="space-y-3">
                <Image
                  src="/placeholder.svg"
                  alt={title}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-video"
                />
                <h3 className="font-medium hover:text-white/80">
                  <Link href="#">{title}</Link>
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Business and International Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Business</h2>
              <Link href="#" className="text-primary hover:underline">
                &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%206.14.22%E2%80%AFAM-XsK7CMnmj1QkcvO7TZalJatO6OFTXZ.png"
                alt="Business news"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-video"
              />
              <h3 className="font-semibold hover:text-primary">
                <Link href="#">
                  11 years after a celebrated opening, massive solar plant faces a bleak future in the Mojave Desert
                </Link>
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  "Honda issues recall on nearly 300K cars due to fuel injection software issue",
                  "Starbucks to remove some menu items, offer free refills",
                  "U.S. economy grows solid 2.3% from October to December, 2.8% for full year 2024",
                ].map((title, i) => (
                  <Link key={i} href="#" className="block hover:text-primary">
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">International</h2>
              <Link href="#" className="text-primary hover:underline">
                &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg"
                alt="International news"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-video"
              />
              <h3 className="font-semibold hover:text-primary">
                <Link href="#">UNRWA director: Israel ban on aid agency will 'destroy' humanitarian efforts</Link>
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  "Panama's president says there will be no negotiation about ownership of canal",
                  "Increased volcanic activity detected in Greece's popular tourist island of Santorini",
                  "The oldest evidence for lead pollution comes from ancient Greece",
                ].map((title, i) => (
                  <Link key={i} href="#" className="block hover:text-primary">
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Sponsored Content Section */}
        <section className="mb-12">
          <h2 className="text-sm text-muted-foreground mb-6">Sponsored Content By Taboola</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              "Online Jobs in USA From Nigeria (Salaries Will Surprise You)",
              "USA Companies Hiring Remote Workers In Nigeria - Check Open Positions",
              "New Container Houses In Ilobu: Take A Look At The Prices!",
              "Air Conditioners Without External Unit (Click To See Prices!)",
              "Discover Budget-Friendly 10,000W Solar Kits Today",
            ].map((title, i) => (
              <div key={i} className="space-y-2">
                <Image
                  src="/placeholder.svg"
                  alt={title}
                  width={200}
                  height={150}
                  className="rounded object-cover aspect-video w-full"
                />
                <h3 className="text-sm hover:text-primary">
                  <Link href="#">{title}</Link>
                </h3>
                <p className="text-xs text-muted-foreground">Sponsored</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Sections</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Politics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    International
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Health
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Shows</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Good Morning America
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    World News Tonight
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Nightline
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    20/20
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Email Newsletters
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Apps
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

