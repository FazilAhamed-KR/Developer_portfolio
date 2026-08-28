import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Fazil Ahamed K</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="nav">
          <ul className="navbar-nav gap-3">
            {links.map((l) => (
              <li className="nav-item" key={l}>
                <a className="nav-link" href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}