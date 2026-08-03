import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-pattern">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

