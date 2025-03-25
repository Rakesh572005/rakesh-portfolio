"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const About = () => {
  const skills = {
    languages: ["C", "Java", "Python", "JavaScript", "TypeScript"],
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "SQL",
      "MongoDB",
      "Node.js",
      "React.js",
      "Express.js",
      "Networks",
    ],
    tools: ["MS Office", "Figma", "Canva", "AutoCAD", "Photoshop", "StartUML", "MATLAB"],
  }

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Lakireddy Bali Reddy College of Engineering",
      period: "2022 – 2026",
      grade: "CGPA: 8.56 at Present",
    },
    {
      degree: "Intermediate",
      field: "MPC",
      institution: "Narayana JR College, Bhavanipuram",
      period: "2020 – 2022",
      grade: "Percentage: 71%",
    },
    {
      degree: "School",
      field: "SSC",
      institution: "D.A.V Public School, Kondapalli",
      period: "2019 – 2020",
      grade: "Percentage: 93%",
    },
  ]

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          I'm a dedicated Information Technology student with expertise in MERN stack, IoT, and AI-driven applications.
          I'm passionate about learning new technologies and building innovative solutions.
        </p>
      </motion.div>

      <Tabs defaultValue="skills" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="skills" className="text-base">
            Skills
          </TabsTrigger>
          <TabsTrigger value="education" className="text-base">
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="mt-6">
          <Card className="shadow-soft border-border/40">
            <CardHeader className="pb-2">
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-primary">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1 bg-secondary/70 hover:bg-secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-primary">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technologies.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1 bg-secondary/70 hover:bg-secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-primary">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1 bg-secondary/70 hover:bg-secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <Card className="shadow-soft border-border/40">
            <CardHeader className="pb-2">
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30 pb-6 last:pb-0">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                    <h3 className="text-lg font-medium text-primary">
                      {edu.degree} | {edu.field}
                    </h3>
                    <p className="text-foreground/80 font-medium">{edu.institution}</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-foreground/60">{edu.period}</span>
                      <span className="text-sm font-medium">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default About

