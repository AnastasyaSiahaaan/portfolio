import { useMemo, useEffect } from "react";
import thumbBimbel from "../assets/thumbnails/bimbel-farmasi.jpg";
import thumbPortfolio from "../assets/thumbnails/portfolio.jpg";
import thumbRent from "../assets/thumbnails/rent-house.jpg";
import thumbRumah from "../assets/thumbnails/rumah-kreatif-toba.jpg";
import thumbRps from "../assets/thumbnails/rps.jpg";
import thumbBusiness from "../assets/thumbnails/business-process.jpg";
import thumbStudyswap from "../assets/thumbnails/studyswap.jpg";
import thumbPowerBI from "../assets/thumbnails/power-bi-dashboard.jpg";

export default function Projects() {
  const pdfThumb = (pdfPath) => `${pdfPath}#page=1&view=FitH`;
  const BASE_URL = import.meta.env.BASE_URL;

  const projects = useMemo(
    () => [
      {
        id: "supermarket-sales-dashboard",
        title: "Supermarket Sales Dashboard",
        type: "Data Analytics Project",
        highlight: "Power BI Analytics",
        desc: "Interactive sales analytics dashboard built with Power BI. Visualizes supermarket sales data with key metrics, profit trends, and product performance insights.",
        role: "Dashboard design & implementation",
        tech: ["Power BI", "Data Analytics", "DAX", "Visualization"],
        thumbnail: thumbPowerBI,
        links: [
          {
            label: "Download",
            href: `${BASE_URL}projects/supermarket-sales-dashboard.pbix`,
          },
        ],
      },

      {
        id: "bimbel-farmasi",
        title: "Bimbel Farmasi",
        type: "Team Project",
        highlight: "Frontend + Figma",
        desc: "Web project for pharmacy tutoring. I contributed to frontend implementation and created the UI flow in Figma.",
        role: "Frontend contributor + UI flow (Figma)",
        tech: ["Laravel", "Blade", "PHP", "Frontend", "Figma"],
        thumbnail: thumbBimbel,
        links: [
          {
            label: "GitHub",
            href: "https://github.com/BImbelFarmasi-ppw06/BimbelFarmasi-ppw06",
          },
          {
            label: "Figma",
            href: "https://www.figma.com/design/ECda6dXvlOljvJ6NsKqIPH/BIMBEL-lagi?node-id=0-1&t=WzqK2BeK59DE5OaB-1",
          },
        ],
      },

      {
        id: "rps-curriculum",
        title: "RPS Curriculum Database System",
        type: "Team Project",
        highlight: "Documentation + Table Design",
        desc: "Curriculum/RPS database system work. I handled documentation and created structured tables together with my team.",
        role: "Documentation owner + table design",
        tech: ["System Analysis", "Database Modeling", "Documentation"],
        pdf: `${BASE_URL}projects/rps-curriculum.pdf`,
        thumbnail: thumbRps,
        links: [{ label: "PDF", href: `${BASE_URL}projects/rps-curriculum.pdf` }],
      },

      {
        id: "business-process-admission",
        title: "Business Process – New Student Admission",
        type: "Team Project",
        highlight: "Business Process (BPMN)",
        desc: "Business process modeling for new student admission workflow (team project).",
        role: "Contributed to process modeling + documentation",
        tech: ["Business Process", "BPMN", "Documentation"],
        pdf: `${BASE_URL}projects/business-process-admission.pdf`,
        thumbnail: thumbBusiness,
        links: [{ label: "PDF", href: `${BASE_URL}projects/business-process-admission.pdf` }],
      },

      {
        id: "studyswap-srs",
        title: "StudySwap – System Requirement Specification (SRS)",
        type: "Team Project",
        highlight: "SRS + Figma",
        desc: "SRS documentation for StudySwap system, with supporting UI flow in Figma.",
        role: "SRS contributor (team) + supporting design references",
        tech: ["SRS", "System Analysis", "Figma"],
        pdf: `${BASE_URL}projects/studyswap-srs.pdf`,
        thumbnail: thumbStudyswap,
        links: [
          { label: "PDF", href: `${BASE_URL}projects/studyswap-srs.pdf` },
          {
            label: "Figma",
            href: "https://www.figma.com/design/LpW1JHzDmmiz9AEG3fT0ZF/Anaprancis?node-id=0-1&t=xpugUQ1bu7y97mnC-1",
          },
        ],
      },

      {
        id: "uiux-rumah-kreatif-toba",
        title: "UI/UX – Rumah Kreatif Toba",
        type: "Design Project",
        highlight: "Figma UI/UX",
        desc: "UI/UX design project created in Figma (wireframes and UI screens).",
        role: "UI/UX design (Figma)",
        tech: ["Figma", "UI/UX", "User Flow"],
        thumbnail: thumbRumah,
        links: [
          {
            label: "Figma",
            href: "https://www.figma.com/design/XbbBDUkfuDG1q9HlOc0rca/UI-UX?node-id=0-1&t=crlNfnIEvlj0tsqx-1",
          },
        ],
      },

      {
        id: "portfolio-website",
        title: "Personal Portfolio Website",
        type: "Personal Project",
        highlight: "React + Vite",
        desc: "My personal portfolio website built with React + Vite (this website).",
        role: "Owned end-to-end: design, structure, deployment",
        tech: ["React", "Vite", "CSS", "Routing"],
        thumbnail: thumbPortfolio,
        links: [{ label: "GitHub", href: "https://github.com/USERNAME/REPO" }],
      },

      {
        id: "rent-house",
        title: "Full-Stack Rent House",
        type: "Bootcamp Project",
        highlight: "Laravel + Next.js (Bootcamp)",
        desc: "A full-stack rent house project from bootcamp training. (You can add repo/demo later.)",
        role: "Bootcamp project implementation",
        tech: ["Laravel", "Next.js", "Full Stack"],
        thumbnail: thumbRent,
        links: [],
      },
    ],
    []
  );

  // ✅ Practicals as a separate card (NO thumbnail)
  const practicals = {
    title: "Selected Course Practicals",
    desc:
      "A collection of practical assignments from my courses that strengthened fundamentals in programming, operating systems, networking, and databases.",
    items: [
      "Visual Programming (flowchart-based)",
      "Computer Architecture & Organization (AOK) using CentOS",
      "System Programming / Operating Systems (using C)",
      "Algorithms & Data Structures",
      "Database Systems & Advanced Database",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "Basic Python (coursework)",
      "Python for Artificial Intelligence (AI course)",
      "System Security (practicals using Kali Linux)",
    ],
    tech: ["C", "CentOS", "SQL", "OOP", "Networking", "Flowchart", "Python", "AI"],
  };

  useEffect(() => {
    const els = document.querySelectorAll('.fade-section');
    if (!els || els.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="projects-page">
      <section className="card">
        <h1 className="page-title" style={{ marginTop: 0 }}>
          Projects
        </h1>
        <p className="text" style={{ marginTop: 6 }}>
          A curated list of my academic, team, and personal projects.
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((p) => (
          <article className="project-item fade-section" key={p.id}>
            <div className="project-thumb">
              <img src={p.thumbnail} alt={`${p.title} thumbnail`} loading="lazy" />
            </div>

            <div className="project-body">
              <div>
                <div className="project-type">{p.type}</div>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-highlight">{p.highlight}</div>
              </div>

              <p className="project-desc">{p.desc}</p>

              <div className="project-role">
                <span className="project-roleLabel">My role:</span>{" "}
                <span className="project-roleValue">{p.role}</span>
              </div>

              <div className="tag-row" style={{ marginTop: 12 }}>
                {p.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {p.links?.length ? (
                  p.links.map((l) => (
                    <a
                      key={l.label}
                      className="project-linkBtn"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label} →
                    </a>
                  ))
                ) : (
                  <span className="project-linksEmpty">Links will be added.</span>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* ✅ Practicals block (NO thumbnail) */}
        <article className="project-item project-item--noThumb fade-section">
          <div className="project-body">
            <div>
              <div className="project-type">Academic</div>
              <h3 className="project-title">{practicals.title}</h3>
              <div className="project-highlight">Labs & Practicals</div>
            </div>

            <p className="project-desc">{practicals.desc}</p>

            <ul className="practical-list">
              {practicals.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>

            <div className="tag-row" style={{ marginTop: 12 }}>
              {practicals.tech.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
