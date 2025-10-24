export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-6">Men haqimda</h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-4">
            Men 5 yildan ortiq AI va Machine Learning sohasida tajribasi bilan professional developeraman. LLM-lar,
            Computer Vision va Natural Language Processing bilan ixtisoslashgan.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Mening maqsadim - AI texnologiyasini foydalanuvchilar uchun oson va qulay qilish. Har bir loyihada eng yangi
            AI modellarini va best practices-larni qo'llashga harakat qilaman.
          </p>
        </div>
        <div className="bg-card rounded-lg p-8 border border-border">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">AI/ML</h3>
              <p className="text-foreground/70">OpenAI, Anthropic, LangChain, TensorFlow, PyTorch</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
              <p className="text-foreground/70">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Backend</h3>
              <p className="text-foreground/70">Python, Node.js, FastAPI, PostgreSQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Tools</h3>
              <p className="text-foreground/70">Git, Docker, Vercel, AWS, Hugging Face</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
