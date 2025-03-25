"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Edubot Software & Services",
      location: "Vijayawada, India",
      period: "Dec 2024 - Present",
      description:
        "Developed and optimized frontend pages using ShadCN, Tailwind CSS and TypeScript. Collaborated with teams to ensure seamless routing techniques, and improve performance, accessibility, and cross-browser compatibility.",
    },
    {
      title: "AIoT Intern",
      company: "Smart Home & Industrial Solutions",
      location: "Vijayawada, India",
      period: "May 2024 - July 2024",
      description:
        "Developed a Smart Health Care security system using AIoT to Detect Body Temperature. Gained experience in integrating IoT devices with AI Technology.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          My professional journey and internship experiences that have shaped my skills and knowledge.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover border-border/40 shadow-soft">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                  <div className="flex items-center text-sm text-foreground/70 bg-secondary/50 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex items-center text-foreground/80 mt-1 font-medium">
                  <span>{exp.company}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience

