"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Blood Group Recognition through Fingerprint",
      description:
        "A IoT and Deep Learning based project - Developed a IoT-based system integrating deep learning models to analyze biometric data from fingerprint sensors and predict blood groups. Combined DL and hardware integration for accurate and efficient results.",
      tags: ["IoT", "Deep Learning", "Biometrics", "Python"],
      links: {
        github: "https://github.com/Rakesh572005/BloodGroupUsingFingerprint.git",
        demo: "#",
      },
    },
    {
      title: "My Portfolio",
      description:
        "Created and deployed a personal portfolio website to showcase my skills, projects, and achievements. Built using HTML, CSS, and JavaScript with a focus on responsive design and professional presentation.",
      tags: ["MERN", "React.js", "Next.js", "Tailwindcss"],
      links: {
        github: "https://github.com/Rakesh572005/rakesh-portfolio.git",
        demo: "#",
      },
    },
    {
      title: "College ERP Portal Backend",
      description:
        "MERN stack Project - Developed a project featuring dedicated portals for students and faculty. Introduced innovative functionalities to address limitations of traditional ERP systems, enhancing user experience, data management, and accessibility.",
      tags: ["MERN", "React.js", "Node.js", "MongoDB", "Express.jsS"],
      links: {
        github: "https://github.com/Rakesh572005/URVERSE_ERP_PORTAL.git",
        demo: "#",
      },
    },
    {
      title: "Smart Health Care Through AIoT",
      description:
        "Artificial Intelligence of Things Project - Developed a Smart Health Care security system using AIoT to Detect Body Temperature. Gained experience in integrating IoT devices with AI technologies.",
      tags: ["AIoT", "Healthcare", "Security", "Python"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "URVERSE - Movie Ticket Booking Website",
      description:
        "A Java Backend Project - Designed and developed a Java backend project for booking tickets to movies, concerts, and shows, with features to apply discount coupons. Utilized SQL for secure data storage and efficient ticket management.",
      tags: ["Java", "SQL", "Backend", "Web Development"],
      links: {
        github: "https://github.com/Rakesh572005/URVERSE_movie_booking_backend.git",
        demo: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          A showcase of my technical projects spanning various domains including MERN stack, IoT, and AI applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col card-hover border-border/40 shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-secondary/30 hover:bg-secondary/50 border-primary/10 text-foreground/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> Code
                  </a>
                </Button>
                <Button variant="default" size="sm" className="shadow-soft" asChild>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

