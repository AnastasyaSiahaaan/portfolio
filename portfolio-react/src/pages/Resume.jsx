export default function Resume() {
  // ✅ taruh PDF di: public/resume/cv.pdf
  const CV_URL = "/resume/cv.pdf";

  return (
    <div className="resume-page">
      <section className="card resume-card">
        <div className="resume-head">
          <div>
            <h1 className="resume-title">Resume</h1>
            <p className="resume-sub">
              Here is my resume (PDF). You can preview it below or download the file.
            </p>
          </div>

          <div className="resume-actions">
            <a className="btn btn-primary" href={CV_URL} target="_blank" rel="noreferrer">
              View (New Tab)
            </a>

            <a className="btn btn-ghost" href={CV_URL} download>
              Download
            </a>
          </div>
        </div>

        {/* ✅ PREVIEW langsung di halaman */}
        <div className="resume-preview">
          {/* object lebih stabil untuk preview pdf */}
          <object data={CV_URL} type="application/pdf" className="resume-pdf">
            <p>
              PDF preview tidak muncul di browser ini. Silakan{" "}
              <a href={CV_URL} target="_blank" rel="noreferrer">
                buka PDF di tab baru
              </a>{" "}
              atau download.
            </p>
          </object>
        </div>
      </section>
    </div>
  );
}
