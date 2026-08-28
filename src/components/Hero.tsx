import { useEffect, useState } from 'react'
import { profile } from '../data/resumeData'

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="hero d-flex align-items-center">
      <div
        className="hero-bg"
        style={{ transform: `translateY(${offset * 0.4}px)`, opacity: 1 - offset / 600 }}
      />
      <div className="container text-center hero-content" style={{ transform: `translateY(${offset * 0.15}px)` }}>
        <p className="hero-eyebrow fade-in-up">Hi, I'm</p>
        <h1 className="hero-title fade-in-up delay-1">{profile.name}</h1>
        <h2 className="hero-subtitle fade-in-up delay-2">{profile.title}</h2>
        <p className="hero-summary fade-in-up delay-3">{profile.summary}</p>
        <div className="fade-in-up delay-4">
          <a href="#projects" className="btn btn-light btn-lg rounded-pill me-3">View Work</a>
          <a href="#contact" className="btn btn-outline-light btn-lg rounded-pill">Contact Me</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}