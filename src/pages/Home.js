import "./home.css";

export default function Home() {
  return (
    <div className="home">

      {/* HEADER */}
      <div className="header">
        <h1>MASENO STUDYROOM</h1>
      </div>

      {/* MATERIALS HUB */}
      <div className="section">
        <h2 className="section-title">Materials Hub</h2>

        <div className="cards-row">
          <div className="card">
            <img src="/logo.png" alt="" />
            <h3>YEAR 1</h3>
            <p>Unit Code | ABC 1XX</p>
          </div>

          <div className="card">
            <img src="/logo.png" alt="" />
            <h3>YEAR 2</h3>
            <p>Unit Code | ABC 2XX</p>
          </div>

          <div className="card">
            <img src="/logo.png" alt="" />
            <h3>YEAR 3</h3>
            <p>Unit Code</p>
          </div>
        </div>
      </div>

      {/* LATEST MATERIALS */}
      <div className="section">
        <div className="section-header">
          <div>
            <h2>LATEST MATERIALS</h2>
            <p>materials added recently</p>
          </div>
          <button className="btn">SHOW MORE</button>
        </div>

        <div className="cards-row">
          <div className="card">
            <img src="/logo.png" alt="" />
            <h3>baf xxx accounting</h3>
            <p>Lecture Notes • Year 1</p>
          </div>

          <div className="card">
            <img src="/logo.png" alt="" />
            <h3>AKI 201</h3>
            <p>Lecture Notes • Year 1</p>
          </div>

          <div className="card">
            <img src="/logo.png" alt="" />
            <h3>BMM 101</h3>
            <p>Lecture Notes</p>
          </div>
        </div>
      </div>

      {/* EDUCATION HUB */}
      <div className="section">
        <h2 className="section-title">Education Hub</h2>

        <div className="grid">
          <div className="grid-item">Student Portal</div>
          <div className="grid-item">HELB Portal</div>
          <div className="grid-item">E-Learning</div>
          <div className="grid-item">University</div>
          <div className="grid-item">Library</div>
          <div className="grid-item">KUCCPS</div>
        </div>
      </div>

      {/* CHATGPT CARD */}
      <div className="chat-card">
        <span>ChatGPT</span>
        <span>→</span>
      </div>

      {/* BOTTOM NAV */}
      <div className="bottom-nav">
        <div>Home</div>
        <div>Maseno X</div>
        <div>Downloads</div>
        <div>Profile</div>
        <div>Settings</div>
      </div>

    </div>
  );
}
