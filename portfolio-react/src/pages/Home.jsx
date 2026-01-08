import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import profileImg from "../assets/profile.jpeg";

// Scroll fade hook (same behaviour as About.jsx)
function useScrollFade(options = { threshold: 0.18, rootMargin: "0px 0px -15% 0px" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        } else {
          el.classList.remove("is-visible");
        }
      },
      options
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

export default function Home() {
  const heroRef = useScrollFade();
  const highlightsRef = useScrollFade();
  const projectsRef = useScrollFade();
  const aboutRef = useScrollFade();
  const footerRef = useScrollFade();

  const [text] = useTypewriter({
    words: ["Software Development", "Data Analyst", "Data Scientist", "UI / UX Designer"],
    loop: true,
    delaySpeed: 1400,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  const featuredProjects = [
    {
      title: "Website Bimbel Farmasi",
      desc: "Web-based tutoring (bimbel) management system for handling students, classes, schedules, and learning materials using Laravel and MySQL.",
      tags: ["Laravel", "MYSQL", "API", "CRUD", "Figma", "Blade", "PHP"],
      link: "/projects",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React + Vite, responsive and clean UI.",
      tags: ["React", "Vite", "CSS"],
      link: "/projects",
    },
    {
      title: "RPS Curriculum Database System",
      desc: "Academic database project involving ERD design, normalization (1NF–3NF), and SQL-based data analysis.",
      tags: ["MYSQL", "ERD", "Database", "Normalization"],
      link: "/projects",
    },
  ];

  return (
    <div className="home-page">
      {/* 1) HERO */}
      <section ref={heroRef} className="card home-layout fade-section">
        <div className="home-text">
          <p className="badge">Open to opportunities</p>

          <h1 className="hero-title">
            <span>Hi There 👋</span>
            <br />
            <span className="hero-accent">I’m Anastasya Siahaan</span>
          </h1>


          <p className="hero-role">
            <span className="role-text">{text}</span>
            <Cursor cursorStyle="|" />
          </p>

          <p className="hero-subtitle">
            Information Systems undergraduate with a strong interest in data, software development,
            and building user-oriented digital solutions.

          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/resume" className="btn btn-ghost">
              View Resume
            </Link>
          </div>
        </div>

        <div className="home-photo fade-in">
          <img className="profile-pic" src={profileImg} alt="Profile" />
        </div>
      </section>


      {/* 2) HIGHLIGHTS */}
      <section ref={highlightsRef} className="home-section fade-section">
        <div className="section-header">
          <h2 className="section-title">Highlights</h2>
          <p className="section-subtitle">A quick snapshot of what I focus on.</p>
        </div>

        <div className="highlight-grid">
          <div className="mini-card">
            <div className="mini-title">Focus</div>
            <div className="mini-text">Data • Software Development • System Analysis</div>
          </div>

          <div className="mini-card">
            <div className="mini-title">Strength</div>
            <div className="mini-text">Analytical Thinking • Problem Solving • Communication</div>
          </div>

          <div className="mini-card">
            <div className="mini-title">Tools</div>
            <div className="mini-text">Canva • Microsoft Office • Figma • Trello • SQL • Postman • Python • Laravel • HTML/CSS/JavaScript </div>
          </div>

          <div className="mini-card">
            <div className="mini-title">Learning</div>
            <div className="mini-text">React • Data • Next.js • UI/UX</div>
          </div>
        </div>
      </section>

      {/* 3) FEATURED PROJECTS */}
      <section ref={projectsRef} className="home-section fade-section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">My top 3 works that represent my skills.</p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((p) => (
            <article className="project-card" key={p.title}>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="tag-row">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <Link to={p.link} className="project-link">
                View Detail →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 4) ABOUT SINGKAT */}
      <section ref={aboutRef} className="home-section fade-section">
        <div className="about-mini card-soft">
          <div>
            <h2 className="section-title" style={{ margin: 0 }}>About</h2>
            <p className="section-subtitle" style={{ marginTop: 8 }}>
              I am an Information Systems undergraduate who enjoys working with data,
              system analysis, and application development. I am currently seeking
              internship opportunities to apply my skills in real-world projects.
            </p>
          </div>

          <Link to="/about" className="btn btn-ghost">
            Read more
          </Link>
        </div>
      </section>

      {/* 5) CONTACT / FOOTER MINI */}
      <footer ref={footerRef} className="home-footer fade-section">
        <div className="footer-card">
          <div>
              <div className="footer-title">Contact</div>

              <div className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=anastasyasiahaan06@gmail.com"
                  aria-label="Email"
                  title="Email"
                  className="icon-link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 6.5L12 13L3 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/anastasya-tb-shn-970835285"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="icon-link"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M7.5 10.5V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M7.5 8.5C8.32843 8.5 9 7.82843 9 7C9 6.17157 8.32843 5.5 7.5 5.5C6.67157 5.5 6 6.17157 6 7C6 7.82843 6.67157 8.5 7.5 8.5Z" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M11.5 14.5C11.5 12.5 13 11.5 14.5 11.5C16 11.5 17 12.5 17 14.25V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/anastasyashn_/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  title="Instagram"
                  className="icon-link"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M12 8.5C9.51472 8.5 7.5 10.5147 7.5 13C7.5 15.4853 9.51472 17.5 12 17.5C14.4853 17.5 16.5 15.4853 16.5 13C16.5 10.5147 14.4853 8.5 12 8.5Z" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M17.8 6.2H17.82" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </a>

                <a
                  href="https://github.com/AnastasyaSiahaaan"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  title="GitHub"
                  className="icon-link"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C7.58 2 4 5.58 4 10C4 13.87 6.87 16.99 10.5 18.25C11 18.34 11.22 18.04 11.22 17.78C11.22 17.55 11.21 16.79 11.21 15.93C8 16.54 7.22 14.58 7.22 14.58C6.77 13.5 6.03 13.16 6.03 13.16C5.02 12.55 6.12 12.56 6.12 12.56C7.26 12.63 7.84 13.71 7.84 13.71C8.85 15.41 10.41 14.96 11.07 14.72C11.16 14 11.45 13.53 11.77 13.28C9.16 13.03 6.44 12.02 6.44 8.57C6.44 7.58 6.79 6.79 7.38 6.16C7.27 5.91 6.96 4.95 7.48 3.64C7.48 3.64 8.28 3.37 11.21 5.1C12 4.87 12.82 4.76 13.64 4.76C14.46 4.76 15.28 4.87 16.07 5.1C19 3.37 19.8 3.64 19.8 3.64C20.32 4.95 20.01 5.91 19.9 6.16C20.49 6.79 20.84 7.58 20.84 8.57C20.84 12.03 18.11 13.03 15.5 13.28C15.93 13.63 16.31 14.36 16.31 15.45C16.31 17.03 16.3 18.36 16.3 18.89C16.3 19.16 16.52 19.47 17.03 19.38C20.66 17.99 23.5 14.09 23.5 9.5C23.5 5.09 19.91 2 15.5 2H12Z" stroke="currentColor" strokeWidth="0.6"/>
                  </svg>
                </a>

                <a
                  href="https://wa.me/6282286874753"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="icon-link"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C10.0201 21 8.17728 20.3964 6.72789 19.3649L3 20L3.63509 16.2721C2.6036 14.8227 2 12.9799 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 11.5 19.95 11.99 19.86 12.47" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 14.5C16.7 14.9 15.9 15.6 14.8 15.9C14.1 16.1 13.3 16 12.5 15.7C11.5 15.3 10.3 14 9.9 13C9.6 12.2 9.5 11.4 9.7 10.7C10 9.6 10.7 8.8 11.1 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Anastasya. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
