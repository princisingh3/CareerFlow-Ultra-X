import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "jobs", label: "Jobs", icon: "💼" },
    { id: "internships", label: "Internships", icon: "🎓" },
    { id: "resume", label: "Resume Builder", icon: "📄" },
    { id: "interview", label: "AI Interview", icon: "🎤" },
    { id: "applications", label: "Applications", icon: "📊" },
    { id: "profile", label: "Profile", icon: "👤" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "jobs":
        return (
          <>
            <h1>Find Your Next Job 💼</h1>
            <p>Discover opportunities that match your skills and career goals.</p>
          </>
        );

      case "internships":
        return (
          <>
            <h1>Explore Internships 🎓</h1>
            <p>Find internships and gain real-world experience.</p>
          </>
        );

      case "resume":
        return (
          <>
            <h1>Build Your ATS Resume 📄</h1>
            <p>Create a professional resume designed for modern recruitment systems.</p>
          </>
        );

      case "interview":
        return (
          <>
            <h1>AI Interview Practice 🎤</h1>
            <p>Practice interview questions and improve your confidence.</p>
          </>
        );

      case "applications":
        return (
          <>
            <h1>Track Your Applications 📊</h1>
            <p>Keep all your job applications organized in one place.</p>
          </>
        );

      case "profile":
        return (
          <>
            <h1>Your Career Profile 👤</h1>
            <p>Manage your skills, education, experience and career information.</p>
          </>
        );

      default:
        return (
          <>
            <p className="welcome-text">Welcome back 👋</p>
            <h1>CareerFlow Ultra X 🚀</h1>
            <p>
              Build Skills. Find Opportunities. Get Hired.
            </p>
          </>
        );
    }
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="navbar">
        <div className="logo">
          CareerFlow <span>Ultra X</span>
        </div>

        <button
          className="ai-button"
          onClick={() => setActiveSection("interview")}
        >
          🤖 AI Career Coach
        </button>
      </header>

      {/* Main Layout */}
      <div className="app-layout">

        {/* Sidebar */}
        <aside className="sidebar">

          <h3>CareerFlow</h3>

          <nav>
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={
                  activeSection === item.id
                    ? "menu-item active"
                    : "menu-item"
                }
                onClick={() => setActiveSection(item.id)}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

        </aside>

        {/* Main Content */}
        <main className="main-content">

          <section className="hero">
            {renderContent()}
          </section>

          {/* Statistics */}
          <section className="stats">

            <div className="stat-card">
              <strong>0</strong>
              <span>Applications</span>
            </div>

            <div className="stat-card">
              <strong>0</strong>
              <span>Saved Jobs</span>
            </div>

            <div className="stat-card">
              <strong>0%</strong>
              <span>Profile Complete</span>
            </div>

            <div className="stat-card">
              <strong>0</strong>
              <span>Interviews</span>
            </div>

          </section>

          {/* Quick Actions */}
          <section className="quick-actions">

            <h2>Quick Actions</h2>

            <div className="action-grid">

              <button
                onClick={() => setActiveSection("jobs")}
              >
                🔎 Search Jobs
              </button>

              <button
                onClick={() => setActiveSection("internships")}
              >
                🎓 Find Internship
              </button>

              <button
                onClick={() => setActiveSection("resume")}
              >
                📄 Create Resume
              </button>

              <button
                onClick={() => setActiveSection("interview")}
              >
                🎤 Practice Interview
              </button>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default App;
