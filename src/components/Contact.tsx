import { profile } from '../data/resumeData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <div ref={ref} className="reveal reveal-scale">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mb-3">Let's build something great.</h2>
          <p className="section-text mb-4">
            Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a> or {profile.phone}
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline-light rounded-pill">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-light rounded-pill">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}