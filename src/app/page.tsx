import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TechMarquee from '@/components/tech-marquee'
import Profile from '@/components/profile'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ScrollAnimation from '@/components/scroll-animation'

export default function Page() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      <ScrollAnimation />
      <div className="relative z-10 bg-black/60">
        <Navbar />
        <Hero />
        <TechMarquee />
        <Profile />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
