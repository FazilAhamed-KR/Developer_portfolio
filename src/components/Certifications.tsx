import { useScrollReveal } from '../hooks/useScrollReveal'
import { certifications } from '../data/resumeData'

export default function Certifications() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="certifications" className="section-dark py-5">
      <div className="container text-center">
        <p className="section-eyebrow">Certifications</p>
        <h2 className="section-title mb-4">Continuous learning</h2>
        <div ref={ref} className="reveal fade-in-up d-flex justify-content-center flex-wrap gap-3">
          {certifications.map((c) => (
            <div className="cert-card" key={c.name}>
              <strong>{c.name}</strong>
              <div className="text-muted small">{c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}