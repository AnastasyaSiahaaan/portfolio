import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/about.jpeg";

// PDF thumbnails (gambar halaman pertama)
import cert1Thumb from "../assets/certificates/cert1-thumb.jpg";
import cert2Thumb from "../assets/certificates/cert2-thumb.jpg";

// Image certificates
import cert3 from "../assets/certificates/cert3.jpg";
import cert4 from "../assets/certificates/cert4.jpg";

/* =========================
   Scroll Fade (REPLAY)
   - Masuk viewport  -> fade in
   - Keluar viewport -> hidden
========================= */
function useScrollFade(options = { threshold: 0.2, rootMargin: "0px 0px -15% 0px" }) {
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

export default function About() {
  const [activeCert, setActiveCert] = useState(null);

  // refs untuk tiap section
  const heroRef = useScrollFade();
  const expRef = useScrollFade();
  const eduRef = useScrollFade();
  const certRef = useScrollFade();

  const name = "Anastasya Tabita Blessing Siahaan";
  const chips = ["Software", "Data", "System Analysis", "UI/UX"];

  const paragraphs = [
    "I am an Information Systems undergraduate at Institut Teknologi Del with a strong interest in software development and data, particularly in building web applications, managing databases, and performing system and data analysis. I enjoy learning how technology and data can be combined to solve real-world problems in a structured and user-oriented way.",

    "Throughout my academic journey, I have worked on various software development projects, both individually and in teams. My experience includes developing web applications using Laravel and Blade, applying object-oriented programming (OOP) concepts using Java, and designing relational databases with MySQL and PostgreSQL. I am also familiar with system documentation such as SRS, BPMN, and database modeling including ERD and normalization. In addition, I have basic experience with Python for data processing, exposure to Next.js through a Full Stack Web Development certification, and UI/UX prototyping using Figma to support clear and user-friendly software interfaces.",

    "I am known as a fast learner, responsible, and detail-oriented individual who is always motivated to improve technical and analytical skills. Currently, I am seeking opportunities as a Software Developer or Data-oriented Intern where I can contribute, learn from real industry practices, and grow professionally in the technology field.",
  ];

  const experiences = [
    {
      title: "Majelis Permusyawaratan Himpunan (MPH) — HIMSI",
      period: "2024 — Present",
      points: [
        "Responsible for inauguration and dissolution of the student executive board (BPH).",
        "Involved in cadre regeneration activities and coordination with committees.",
      ],
    },
    {
      title: "Del Data Science — Member",
      period: "2024 — Present",
      points: [
        "Participate in learning sessions and discussions about data science topics.",
        "Attend socialization events and meetings with invited speakers.",
      ],
    },
  ];

  const education = [
    {
      level: "University",
      school: "Institut Teknologi Del",
      major: "Information Systems",
      period: "2023 — Present",
      gpaLabel: "Current GPA",
      gpaValue: "3.39 / 4.00",
    },
    {
      level: "Senior High School",
      school: "SMA Swasta Bintang Timur Balige",
      major: "Science",
      period: "2020 — 2023",
      gpaLabel: "Final GPA",
      gpaValue: "92.19",
    },
  ];

  // PDF tetap dari public/certificates (dengan BASE_URL dinamis)
  const certificates = [
    {
      id: "cert1",
      title: "Associate Data Scientist",
      issuer: "BBPSDMP Medan – KOMDIGI (VSGA) • 2025",
      type: "pdf",
      src: `${import.meta.env.BASE_URL}certificates/cert1.pdf`,
      thumb: cert1Thumb,
    },
    {
      id: "cert2",
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia • 2025",
      type: "pdf",
      src: `${import.meta.env.BASE_URL}certificates/cert2.pdf`,
      thumb: cert2Thumb,
    },
    {
      id: "cert3",
      title: "Full-Stack Laravel 11 & Next.js 14",
      issuer: "BuildWithAngga • 2025",
      type: "image",
      src: cert3,
      thumb: cert3,
    },
    {
      id: "cert4",
      title: "HCIA-AI V4.0 Course",
      issuer: "Huawei ICT Academy • 2025",
      type: "image",
      src: cert4,
      thumb: cert4,
    },
  ];

  const closeModal = () => setActiveCert(null);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeCert ? "hidden" : "auto";
  }, [activeCert]);

  return (
    <div className="about-page">
      {/* HERO */}
      <section ref={heroRef} className="card about-hero-center fade-section">
        <h1 className="about-title">About</h1>
        <p className="about-name">{name}</p>

        <div className="about-photoWrap">
          <img src={profileImg} alt={name} className="about-photo" />
        </div>

        <div className="about-paras">
          {paragraphs.map((p, i) => (
            <p className="about-paragraph" key={i}>{p}</p>
          ))}
        </div>

        <div className="about-chips">
          {chips.map((c) => (
            <span key={c} className="about-chip">{c}</span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section ref={expRef} className="card fade-section">
        <h2 className="section-title">Experience & Organizations</h2>
        <div className="exp-list">
          {experiences.map((e) => (
            <div key={e.title} className="exp-card">
              <div className="exp-head">
                <h3 className="exp-title">{e.title}</h3>
                <span className="exp-period">{e.period}</span>
              </div>
              <ul className="exp-points">
                {e.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section ref={eduRef} className="card fade-section">
        <h2 className="section-title">Education</h2>
        <div className="edu-grid">
          {education.map((e) => (
            <div key={e.school} className="edu-card">
              <div className="edu-top">
                <div>
                  <div className="edu-level">{e.level}</div>
                  <div className="edu-school">{e.school}</div>
                  <div className="edu-major">{e.major}</div>
                </div>
                <div className="edu-right">
                  <div className="edu-period">{e.period}</div>
                  <div className="edu-gpa">
                    <b>{e.gpaLabel}:</b> {e.gpaValue}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section ref={certRef} className="card fade-section">
        <h2 className="section-title">Certifications</h2>

        <div className="cert-grid">
          {certificates.map((c) => (
            <button
              key={c.id}
              className="cert-item"
              onClick={() => setActiveCert(c)}
            >
              <div className="cert-thumb">
                <img src={c.thumb} alt={c.title} />
                {c.type === "pdf" && <span className="pdf-corner">PDF</span>}
              </div>
              <div className="cert-meta">
                <div className="cert-title">{c.title}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <header className="cert-modal-header">
              <div>
                <strong>{activeCert.title}</strong>
                <div className="cert-modal-subtitle">{activeCert.issuer}</div>
              </div>
              <button className="cert-modal-close" onClick={closeModal}>✕</button>
            </header>

            <div className="cert-modal-body">
              {activeCert.type === "image" ? (
                <img src={activeCert.src} alt={activeCert.title} className="cert-modal-image" />
              ) : (
                <iframe src={activeCert.src} title={activeCert.title} className="cert-modal-pdf" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
