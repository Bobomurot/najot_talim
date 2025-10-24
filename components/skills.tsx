export function Skills() {
  const skills = [
    { category: "AI/ML", items: ["OpenAI", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"] },
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB"] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "AWS", "Jupyter"] },
  ]

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-foreground mb-12">Ko'nikma</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">{skillGroup.category}</h3>
            <ul className="space-y-2">
              {skillGroup.items.map((skill, i) => (
                <li key={i} className="text-foreground/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
