export function Projects() {
  const projects = [
    {
      title: "AI Chat Assistant",
      description: "OpenAI API bilan yaratilgan intelligent chat ilovasi, context memory bilan",
      tags: ["Next.js", "OpenAI", "TypeScript", "Vercel AI SDK"],
      link: "#",
    },
    {
      title: "Image Recognition System",
      description: "Computer Vision bilan rasm tahlili va klassifikatsiya tizimi",
      tags: ["Python", "TensorFlow", "FastAPI", "React"],
      link: "#",
    },
    {
      title: "NLP Text Analyzer",
      description: "Natural Language Processing bilan matn tahlili va sentiment analysis",
      tags: ["Python", "LangChain", "Hugging Face", "Next.js"],
      link: "#",
    },
    {
      title: "AI-Powered Recommendation Engine",
      description: "Machine Learning bilan personalized tavsiyalar tizimi",
      tags: ["Python", "Scikit-learn", "PostgreSQL", "Node.js"],
      link: "#",
    },
    {
      title: "Voice-to-Text Application",
      description: "Speech Recognition va AI bilan ovozdan matnni yaratish",
      tags: ["Next.js", "Whisper API", "TypeScript"],
      link: "#",
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "AI modellar bilan data tahlili va prognozlash dashboard",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <h2 className="text-4xl font-bold text-foreground mb-12">Loyihalar</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group relative p-6 transition-all duration-300 hover:scale-105"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              /* Updated to cyan accent color */
              backgroundColor: "var(--color-accent-light, rgba(102, 204, 255, 0.1))",
              border: "2px solid var(--color-accent, rgb(102, 204, 255))",
            }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
