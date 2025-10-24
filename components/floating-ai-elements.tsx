export function FloatingAIElements() {
  const elements = [
    { label: "LLM", delay: 0, direction: "float" },
    { label: "Neural Networks", delay: 1, direction: "float-reverse" },
    { label: "NLP", delay: 2, direction: "float" },
    { label: "Computer Vision", delay: 1.5, direction: "float-reverse" },
    { label: "Deep Learning", delay: 0.5, direction: "float" },
    { label: "AI Integration", delay: 2.5, direction: "float-reverse" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute animate-${element.direction}`}
          style={{
            left: `${15 + index * 15}%`,
            top: `${20 + (index % 2) * 30}%`,
            animationDelay: `${element.delay}s`,
          }}
        >
          <div className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent/60 text-sm font-medium whitespace-nowrap">
            {element.label}
          </div>
        </div>
      ))}

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-accent/10 animate-rotate-slow" />
      <div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border border-accent/10 animate-rotate-slow"
        style={{ animationDelay: "-10s" }}
      />
    </div>
  )
}
