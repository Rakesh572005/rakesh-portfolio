"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Rakesh Manubolu</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
            IT Professional specializing in MERN stack, IoT, and AI-driven applications
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild className="shadow-soft hover:shadow-soft-lg transition-all">
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/5">
              <a href="/resume.pdf" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://github.com/rakeshmanubolu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a
                href="https://linkedin.com/in/rakeshmanubolu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a href="mailto:manubolurakesh@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full"></div>
            <Image
              src="/hacker.jpg"
              alt="Rakesh Manubolu"
              width={300} // Adjust as needed
              height={300}
              className="rounded-full object-cover w-full h-full p-4 shadow-soft-lg"            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

