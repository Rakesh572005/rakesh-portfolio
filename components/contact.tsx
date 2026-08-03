"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone,Github,GitBranch } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Encode components for URL safety
    const mailtoLink = `mailto:manubolurakesh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  
    // Open mail client
    window.location.href = mailtoLink;
  
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "manubolurakesh@gmail.com",
      link: "mailto:manubolurakesh@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: "+91 9121970425",
      link: "tel:+919121970425",
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      title: "GIT HUB",
      details: "Rakesh5702005",
      link: "https://github.com/Rakesh572005",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      details: "Kondapalli-521228, India",
      link: "https://maps.google.com/?q=Kondapalli,India",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          Feel free to reach out to me for any inquiries, opportunities, or just to say hello!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="shadow-soft border-border/40">
            <CardHeader>
              <CardTitle className="text-primary">Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border/40 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border/40 focus:border-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-border/40 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-border/40 focus:border-primary/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full shadow-soft hover:shadow-soft-lg transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover border-border/40 shadow-soft">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full p-3 bg-secondary/50 border border-primary/10">{info.icon}</div>
                  <div>
                    <h3 className="font-medium text-primary">{info.title}</h3>
                    <a
                      href={info.link}
                      className="text-foreground/70 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.details}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

