const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {currentYear} <span className="text-primary font-medium">Rakesh Manubolu</span>. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-foreground/70">
              Built with <span className="text-primary">Next.js</span> and{" "}
              <span className="text-primary">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

