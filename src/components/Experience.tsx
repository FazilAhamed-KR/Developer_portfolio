import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience } from '../data/resumeData'

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="experience" className="section-dark py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </div>
        <div ref={ref} className="reveal timeline">
          {experience.map((job, i) => (
            <div className={`timeline-item fade-in-up delay-${i + 1}`} key={job.company}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h5>{job.role}</h5>
                <p className="timeline-meta">{job.company} · {job.period}</p>
                <ul>
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}