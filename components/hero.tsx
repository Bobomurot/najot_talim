import { FloatingAIElements } from "./floating-ai-elements"

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
      <FloatingAIElements />

      <div className="flex justify-center mb-8 relative z-10">
        <img
          src="/ai-developer-profile-picture.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-accent shadow-lg"
        />
      </div>

      <div className="space-y-6 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
          Salom, men <span className="text-accent">AI Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl text-balance">
          Artificial Intelligence va Machine Learning bilan zamonaviy ilovalar yaratishda ixtisoslashgan. LLM, Neural
          Networks va AI integrations bilan ishlayapman.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Loyihalarni ko'rish
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-foreground/20 text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-colors"
          >
            Bog'lanish
          </a>
        </div>
      </div>
    </section>
  )
}
