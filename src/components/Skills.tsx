import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data/resumeData'

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">What I work with</h2>
        </div>
        <div ref={ref} className="reveal row g-4">
          {Object.entries(skills).map(([category, items], i) => (
            <div className="col-md-4" key={category}>
              <div className={`skill-card fade-in-up delay-${(i % 4) + 1}`}>
                <h5>{category}</h5>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {items.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}