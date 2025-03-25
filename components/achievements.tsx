"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Trophy, Users } from "lucide-react"

const Achievements = () => {
  const achievements = [
    {
      title: "Winners of Smart India Hackathon 2024 - Hardware Edition",
      description: "Led the team to victory in the prestigious national-level hackathon.",
      icon: <Trophy className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Runners in Innostes Solutions Pvt Ltd Hackathon",
      description: "Led the team to secure the runner-up position in the corporate hackathon.",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: "Conducted Medha Quiz in National Level fest (Lakshya-2k25)",
      description: "Successfully organized and conducted a quiz competition at the national level technical fest.",
      icon: <Users className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Conducted Internal Hackathon as Student coordinator (HACKIT-2k24)",
      description: "Coordinated and managed the internal hackathon event for students.",
      icon: <Users className="h-10 w-10 text-blue-500" />,
    },
  ]

  const certifications = [
    "Achieved Python (basic) certificate in HackerRank",
    "Achieved CISCO CPA: Programming Essentials in C++",
    "Achieved CISCO Python Essentials 1",
    "Achieved Cloud Skills Challenge: Azure AI Fundamentals by Microsoft",
  ]

  return (
    <section id="achievements" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Achievements & Certifications</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          Recognition of my accomplishments and professional certifications.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-border/40 shadow-soft">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-full p-3 bg-secondary/50 border border-primary/10">{achievement.icon}</div>
                  <CardTitle className="text-lg font-medium">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-soft border-border/40">
            <CardHeader>
              <CardTitle className="text-primary">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-foreground/80">
                    {cert}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

