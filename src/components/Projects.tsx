import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/resumeData'

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Selected work</h2>
        </div>
        <div ref={ref} className="reveal row g-4">
          {projects.map((p, i) => (
            <div className="col-md-6" key={p.title}>
              <div className={`project-card fade-in-up delay-${(i % 4) + 1}`}>
                <span className="chip mb-2">{p.tag}</span>
                <h5 className='mt-3'>{p.title}</h5>
                <ul>
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light rounded-pill mt-2">
                    Visit ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}