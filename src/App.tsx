import { useState } from "react";
import { useTextStats } from "./hooks/useTextStats";

function App() {
  const [text, setText] = useState<string>("");
  const stats = useTextStats(text);

  return (
    <div className="app-shell">
      <div className="sky-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="ground-art" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            <span />
            <span />
          </div>
          <span className="brand-name">Word Counter</span>
        </div>
      </header>

      <main className="content">
        <section className="editor-panel">
          <div className="panel">
            <div className="stats-bar">
              <div className="stat-block">
                <span className="stat-label">Words</span>
                <span className="stat-value">{stats.words}</span>
              </div>
              <div className="stat-block">
                <span className="stat-label">Characters</span>
                <span className="stat-value">{stats.charactersWithSpaces}</span>
              </div>
              <div className="stat-block">
                <span className="stat-label">Reading time</span>
                <span className="stat-value small">{stats.readingTime}</span>
              </div>
              <div className="stat-block">
                <span className="stat-label">Speaking time</span>
                <span className="stat-value small">{stats.speakingTime}</span>
              </div>
            </div>

            <div className="editor-area">
              <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="editor-input"
                placeholder="Paste or type your text here..."
                spellCheck={false}
              />
            </div>

            <div className="panel-footer">
              <span className="footer-title">Word Counter</span>
              <span>— Count words, reading time, and speaking time.</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
