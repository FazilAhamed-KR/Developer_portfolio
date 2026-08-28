import { useScrollReveal } from '../hooks/useScrollReveal'
import { profile, education } from '../data/resumeData'

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="about" className="section-dark py-5">
      <div className="container">
        <div ref={ref} className="reveal reveal-scale text-center mx-auto" style={{ maxWidth: 780 }}>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title mb-4">Building fast, reliable, delightful interfaces.</h2>
          <p className="section-text">{profile.summary}</p>
          <div className="mt-4">
            <span className="badge-pill">{education.degree}</span>
            <span className="badge-pill">{education.school}</span>
            <span className="badge-pill">{education.period}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
