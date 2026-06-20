const chapters = [
  {
    week: "01",
    title: "CyberAI Mindset",
    subtitle:
      "How artificial intelligence is reshaping ethical hacking, cyber defense, analyst workflows, and the future of security careers.",
    lab: "CyberAI career map and responsible AI security checklist",
  },
  {
    week: "02",
    title: "Secure Lab",
    subtitle:
      "Design a safe, isolated cybersecurity lab with Kali Linux, virtual machines, Python workspace, GitHub structure, and controlled testing rules.",
    lab: "Professional lab setup documentation",
  },
  {
    week: "03",
    title: "Security Prompting",
    subtitle:
      "Use AI as a serious cybersecurity reasoning partner for threat explanation, log review, vulnerability understanding, and report drafting.",
    lab: "Cybersecurity prompt playbook",
  },
  {
    week: "04",
    title: "Python Automation",
    subtitle:
      "Build small but useful Python tools for IOC extraction, file parsing, regex-based detection, log processing, and security utilities.",
    lab: "IOC extractor and log parser",
  },
  {
    week: "05",
    title: "Threat Intelligence",
    subtitle:
      "Convert raw cyber reports into analyst-ready intelligence briefs using AI-assisted summarization, classification, and MITRE-style thinking.",
    lab: "AI threat intelligence brief generator",
  },
  {
    week: "06",
    title: "Vulnerability Analysis",
    subtitle:
      "Understand CVEs, CWEs, CVSS, business impact, remediation planning, and professional vulnerability explanation using AI support.",
    lab: "Vulnerability risk assistant",
  },
  {
    week: "07",
    title: "LLM Security",
    subtitle:
      "Study prompt injection, jailbreaks, unsafe tool use, data leakage, guardrail design, and defensive architecture for AI applications.",
    lab: "Prompt injection defense checker",
  },
  {
    week: "08",
    title: "Phishing Defense",
    subtitle:
      "Analyze phishing attempts using language signals, sender mismatch, suspicious links, urgency patterns, and social engineering indicators.",
    lab: "AI phishing risk analyzer",
  },
  {
    week: "09",
    title: "Malware Triage",
    subtitle:
      "Learn safe malware-analysis thinking using hashes, strings, sandbox-style reports, behavior indicators, and AI-generated triage summaries.",
    lab: "Malware triage report assistant",
  },
  {
    week: "10",
    title: "AI SOC Operations",
    subtitle:
      "Build AI-assisted monitoring workflows for logs, alerts, suspicious activity, incident timelines, and security investigation summaries.",
    lab: "SOC log investigation copilot",
  },
  {
    week: "11",
    title: "Security Agents",
    subtitle:
      "Design controlled AI security assistants that can read files, classify incidents, suggest response actions, and generate analyst reports.",
    lab: "CyberAI assistant workflow",
  },
  {
    week: "12",
    title: "Capstone Lab",
    subtitle:
      "Build a portfolio-ready CyberAI product with architecture, GitHub documentation, demo assets, and a professional final report.",
    lab: "Final capstone project",
  },
];

const pillars = [
  {
    title: "Think",
    text: "Understand cyber risk, attacker behavior, ethical boundaries, and AI limitations before touching tools.",
  },
  {
    title: "Investigate",
    text: "Reason through logs, phishing emails, threat reports, vulnerabilities, and suspicious behavior with AI support.",
  },
  {
    title: "Automate",
    text: "Build Python and AI-assisted workflows that reduce repetitive analyst work and improve consistency.",
  },
  {
    title: "Defend",
    text: "Design secure AI usage patterns, LLM guardrails, SOC workflows, and professional response reports.",
  },
];

const outcomes = [
  "Safe cybersecurity lab setup",
  "Cybersecurity prompt playbook",
  "Python IOC extraction toolkit",
  "Threat intelligence brief workflow",
  "Vulnerability risk reporting assistant",
  "Prompt injection defense checker",
  "AI phishing analysis system",
  "SOC-style log investigation copilot",
];

const projectCards = [
  "AI Phishing Risk Analyzer",
  "Threat Intelligence Brief Generator",
  "Vulnerability Report Assistant",
  "Prompt Injection Defense Checker",
  "SOC Log Investigation Copilot",
  "Malware Triage Report Assistant",
];

const faqs = [
  {
    q: "Is this a hacking shortcut course?",
    a: "No. It is a professional AI and cybersecurity program focused on ethical learning, defensive thinking, controlled labs, and real security workflows.",
  },
  {
    q: "Does the course include projects?",
    a: "Yes. Each major section produces a practical CyberAI project, and the course ends with a polished capstone suitable for GitHub and presentations.",
  },
  {
    q: "Is it beginner friendly?",
    a: "Yes. The course starts with fundamentals and gradually moves into AI security, Python automation, LLM defense, and SOC-style workflows.",
  },
  {
    q: "What makes this premium?",
    a: "The program is structured around portfolio outcomes, professional reporting, guided labs, ethical boundaries, and real CyberAI product thinking.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="page-shell site-header">
        <a href="#" className="brand">
          <span className="brand-symbol">CA</span>
          <span>
            <span className="brand-name">CyberAI Security</span>
            <span className="brand-caption">Professional Program</span>
          </span>
        </a>

        <nav className="nav">
          <a href="#method">Method</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#projects">Projects</a>
          <a href="#mentor">Instructor</a>
        </nav>
      </header>

      <section className="page-shell hero">
        <div>
          <p className="eyebrow">12-week premium cohort</p>

          <h1 className="display hero-title">
            AI for Ethical Cybersecurity.
          </h1>

          <p className="hero-subtitle">
            A professional program by <strong>Sundaram Mishra</strong> for learners who want to build
            AI-powered security tools, automate analyst workflows, understand LLM defense, and graduate
            with portfolio-ready CyberAI projects.
          </p>

          <p className="hero-note">
            Designed as a serious training pathway for ethical hacking, cyber defense, threat intelligence,
            phishing analysis, vulnerability reporting, and SOC-style investigation.
          </p>

          <div className="hero-actions">
            <a href="#curriculum" className="button primary">View Curriculum</a>
            <a href="#projects" className="button secondary">Explore Projects</a>
          </div>
        </div>

        <aside className="program-dossier">
          <div className="dossier-top">
            <div>
              <p className="dossier-label">Program dossier</p>
              <h2 className="display dossier-title">
                CyberAI Builder Track
              </h2>
            </div>
            <span className="dossier-badge">Flagship</span>
          </div>

          <div className="dossier-grid">
            <div className="dossier-stat">
              <strong>12</strong>
              <span>guided weeks</span>
            </div>
            <div className="dossier-stat">
              <strong>8+</strong>
              <span>practical builds</span>
            </div>
            <div className="dossier-stat">
              <strong>1</strong>
              <span>capstone project</span>
            </div>
            <div className="dossier-stat">
              <strong>0</strong>
              <span>reckless shortcuts</span>
            </div>
          </div>

          <ul className="dossier-list">
            <li>Ethical hacking mindset with AI-first awareness</li>
            <li>Python automation for repeatable security workflows</li>
            <li>Threat intelligence, phishing defense, and vulnerability reporting</li>
            <li>LLM security, prompt injection defense, and safe AI usage patterns</li>
            <li>SOC-style investigation, report writing, and final project presentation</li>
          </ul>
        </aside>
      </section>

      <section className="strip">
        <div className="page-shell strip-inner">
          {["Ethical Hacking", "AI Security", "Python Automation", "SOC Workflows"].map((item) => (
            <div className="strip-item" key={item}>
              <small>Focus</small>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="method" className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Program method</p>
            <h2 className="display section-title">
              A clean learning system for serious CyberAI builders.
            </h2>
          </div>

          <p className="section-subtitle">
            The course follows a professional progression: understand the security problem, investigate
            with AI support, automate repetitive work, and defend through responsible systems. Every chapter
            moves the learner closer to a portfolio-grade cybersecurity capability.
          </p>
        </div>

        <div className="pillars">
          {pillars.map((pillar, index) => (
            <article className="pillar" key={pillar.title}>
              <span className="pillar-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="light-section">
        <div className="page-shell section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Student outcomes</p>
              <h2 className="display section-title">
                Smaller promises. Stronger proof.
              </h2>
            </div>

            <p className="section-subtitle">
              Students do not only finish with knowledge. They finish with visible work: tools, reports,
              workflows, documentation, and a capstone project that can be shown professionally.
            </p>
          </div>

          <div className="outcome-grid">
            {outcomes.map((item) => (
              <article className="outcome-card" key={item}>
                <small>Deliverable</small>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">12-week curriculum</p>
            <h2 className="display section-title">
              From cyber foundations to AI-powered defense projects.
            </h2>
          </div>

          <p className="section-subtitle">
            Each chapter has a compact title, a deeper professional subtitle, and a clear project outcome.
            The structure is intentionally original and built around practical CyberAI workflows.
          </p>
        </div>

        <div className="curriculum-list">
          {chapters.map((chapter) => (
            <article className="chapter-row" key={chapter.week}>
              <div className="chapter-week">{chapter.week}</div>

              <h3 className="chapter-title">{chapter.title}</h3>

              <p className="chapter-copy">{chapter.subtitle}</p>

              <p className="chapter-lab">
                <span>Lab outcome</span>
                {chapter.lab}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="page-shell section">
        <div className="projects-layout">
          <div>
            <p className="eyebrow">Portfolio projects</p>
            <h2 className="display section-title">
              A portfolio that looks like real capability.
            </h2>
            <p className="hero-note">
              The projects are designed to feel practical, explainable, and professional. They help learners
              demonstrate cybersecurity understanding, AI workflow design, automation ability, and ethical judgment.
            </p>
          </div>

          <div className="project-grid">
            {projectCards.map((project, index) => (
              <article className="project-card" key={project}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{project}</h3>
                <p>
                  A guided build designed for GitHub documentation, project explanation,
                  and professional presentation.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Course architecture</p>
            <h2 className="display section-title">
              Built like a professional security workflow.
            </h2>
          </div>

          <p className="section-subtitle">
            The course is structured to feel like how real security teams think: inputs, reasoning,
            automation, and polished outputs.
          </p>
        </div>

        <div className="architecture">
          {[
            ["Input", "Threat reports, phishing samples, logs, CVEs, prompts, and security cases."],
            ["Reasoning", "AI-assisted analysis with verification, context, ethics, and analyst judgment."],
            ["Automation", "Python tools, structured workflows, rule-based checks, and report generation."],
            ["Output", "Portfolio projects, investigation summaries, documentation, and capstone demo."],
          ].map(([label, text]) => (
            <div className="arch-row" key={label}>
              <div className="arch-key">{label}</div>
              <div className="arch-value">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="mentor" className="light-section">
        <div className="page-shell section">
          <div className="instructor-card">
            <div>
              <p className="eyebrow">Instructor</p>
              <h2 className="display section-title">
                Sundaram Mishra
              </h2>
              <p>
                Sundaram teaches cybersecurity-first AI skills for learners who want to understand ethical
                hacking, secure systems, AI-assisted investigation, and modern cyber defense workflows.
              </p>
            </div>

            <div className="quote-box">
              <p className="display">
                “Use AI as a security partner, not a shortcut. Learn the fundamentals, verify the outputs,
                build the tools, and stay responsible.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="display section-title">
              Clear, ethical, and professional.
            </h2>
          </div>

          <p className="section-subtitle">
            The program is positioned for serious learners who want practical skill, not unsafe shortcuts.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-panel">
        <div className="page-shell">
          <p className="eyebrow">Final position</p>
          <h2 className="display">
            Not a prompt course. A CyberAI capability program.
          </h2>
          <p>
            Designed for learners who want to move beyond tutorials and build practical, ethical,
            AI-powered cybersecurity workflows.
          </p>
        </div>
      </section>

      <footer className="page-shell footer">
        <p>© 2026 CyberAI Security Professional Program. All rights reserved.</p>
        <p>Ethical learning only. Controlled labs. Responsible AI use.</p>
      </footer>
    </main>
  );
}
