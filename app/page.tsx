const curriculum = [
  {
    week: "Week 01",
    title: "CyberAI Mindset",
    subtitle:
      "Understand the new cybersecurity landscape where ethical hackers, defenders, analysts, and attackers are all being reshaped by artificial intelligence.",
    outcomes: ["AI in cyber defense", "Ethical boundaries", "Cyber kill chain", "Modern security careers"],
  },
  {
    week: "Week 02",
    title: "Secure Lab",
    subtitle:
      "Set up a professional, isolated cybersecurity lab for responsible AI-assisted experiments, safe testing, and hands-on learning.",
    outcomes: ["Kali Linux setup", "Virtual labs", "Python workspace", "GitHub portfolio base"],
  },
  {
    week: "Week 03",
    title: "Security Prompting",
    subtitle:
      "Use AI as a cybersecurity reasoning partner for threat analysis, vulnerability explanation, log review, and security documentation.",
    outcomes: ["Prompt frameworks", "Threat analysis", "Report drafting", "Output verification"],
  },
  {
    week: "Week 04",
    title: "Python Automation",
    subtitle:
      "Automate repetitive security tasks using Python, including IOC extraction, log parsing, file scanning, and structured security utilities.",
    outcomes: ["Regex", "IOC extraction", "Log parsing", "Command-line tools"],
  },
  {
    week: "Week 05",
    title: "Threat Intelligence",
    subtitle:
      "Transform raw threat information into analyst-ready intelligence briefs using AI-assisted summarization, classification, and MITRE-style thinking.",
    outcomes: ["IOC analysis", "TTP mapping", "Threat briefs", "Executive summaries"],
  },
  {
    week: "Week 06",
    title: "Vulnerability Analysis",
    subtitle:
      "Learn how to understand CVEs, CWEs, CVSS scores, business impact, remediation steps, and professional vulnerability reporting.",
    outcomes: ["CVE analysis", "Risk scoring", "Remediation plans", "Security reporting"],
  },
  {
    week: "Week 07",
    title: "LLM Security",
    subtitle:
      "Study the security risks of AI applications, including prompt injection, jailbreaks, unsafe tool use, data leakage, and guardrail design.",
    outcomes: ["Prompt injection", "Jailbreak risks", "Guardrails", "Safe AI workflows"],
  },
  {
    week: "Week 08",
    title: "Phishing Defense",
    subtitle:
      "Analyze phishing attempts using AI, language signals, sender mismatch, urgency patterns, suspicious links, and social engineering indicators.",
    outcomes: ["Email analysis", "Risk scoring", "Social engineering", "Defense playbooks"],
  },
  {
    week: "Week 09",
    title: "Malware Triage",
    subtitle:
      "Learn safe malware-analysis thinking using hashes, strings, sandbox-style reports, suspicious behavior indicators, and AI-generated triage notes.",
    outcomes: ["Static indicators", "Sandbox reports", "YARA basics", "Triage summaries"],
  },
  {
    week: "Week 10",
    title: "AI SOC Operations",
    subtitle:
      "Build AI-assisted security monitoring workflows for logs, alerts, suspicious activity, timelines, and incident investigation summaries.",
    outcomes: ["SOC workflow", "SIEM thinking", "Alert analysis", "Incident timelines"],
  },
  {
    week: "Week 11",
    title: "Security Agents",
    subtitle:
      "Design controlled AI security assistants that can read logs, classify incidents, suggest response actions, and generate analyst reports.",
    outcomes: ["Agent workflows", "Tool use", "Human approval", "Response reports"],
  },
  {
    week: "Week 12",
    title: "Capstone Lab",
    subtitle:
      "Build a portfolio-ready CyberAI product with architecture, documentation, demo assets, GitHub repository, and a professional project report.",
    outcomes: ["Capstone build", "Demo video", "GitHub README", "Final presentation"],
  },
];

const projects = [
  {
    title: "AI Phishing Risk Analyzer",
    text: "Detect social engineering signals, suspicious links, urgency language, and credential-theft patterns.",
  },
  {
    title: "Threat Intelligence Brief Generator",
    text: "Convert long threat reports into executive summaries, technical notes, indicators, and recommended actions.",
  },
  {
    title: "Vulnerability Report Assistant",
    text: "Explain CVEs, business impact, severity, affected systems, and remediation steps in professional format.",
  },
  {
    title: "Prompt Injection Defense Checker",
    text: "Identify suspicious LLM inputs and design safer AI application workflows with human approval.",
  },
  {
    title: "SOC Log Investigation Copilot",
    text: "Analyze authentication logs, detect suspicious events, build timelines, and generate analyst-style summaries.",
  },
  {
    title: "Malware Triage Report Assistant",
    text: "Summarize mock malware indicators safely using hashes, strings, behavior notes, and response guidance.",
  },
];

const bonuses = [
  "Cybersecurity report writing templates",
  "GitHub portfolio setup guide",
  "AI security career roadmap",
  "Interview explanation framework",
  "Capstone project documentation structure",
  "Responsible AI and ethical hacking checklist",
];

const faqs = [
  {
    q: "Is this course only about ChatGPT prompts?",
    a: "No. The program teaches cybersecurity-first thinking. AI is used as a professional layer for analysis, automation, reporting, and defense workflows.",
  },
  {
    q: "Will students build projects?",
    a: "Yes. Students build multiple CyberAI tools and finish with one portfolio-ready capstone project.",
  },
  {
    q: "Is this course beginner friendly?",
    a: "Yes. Basic computer knowledge is enough to start. Python and Linux are introduced step by step inside the course.",
  },
  {
    q: "Is this course ethical and safe?",
    a: "Yes. All labs are taught inside controlled environments with responsible use, legal boundaries, and defensive learning as the foundation.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#06b6d440,transparent_35%),radial-gradient(circle_at_top_right,#8b5cf640,transparent_30%),linear-gradient(180deg,#030712_0%,#020617_100%)]" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="group">
            <p className="text-lg font-black tracking-tight">CyberAI Security</p>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
              Professional Program
            </p>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#curriculum" className="hover:text-white">Curriculum</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#pricing" className="hover:text-white">Program</a>
            <a href="#mentor" className="hover:text-white">Instructor</a>
            <a
              href="#apply"
              className="rounded-full bg-cyan-300 px-5 py-2.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-200"
            >
              Apply Now
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              12-Week Premium Cohort • AI + Ethical Cybersecurity
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Become an Ethical Hacker in the Era of AI.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              A professional hands-on program taught by <span className="font-semibold text-white">Sundaram Mishra</span>,
              designed to help learners build AI-powered cybersecurity tools, security automation workflows,
              LLM defense systems, and portfolio-ready CyberAI projects.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#apply"
                className="rounded-full bg-cyan-300 px-8 py-4 text-center text-base font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Join the Program
              </a>
              <a
                href="#curriculum"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Curriculum
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-white">12</p>
                <p className="mt-1 text-sm text-slate-400">Weeks</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-white">8+</p>
                <p className="mt-1 text-sm text-slate-400">CyberAI Tools</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-white">1</p>
                <p className="mt-1 text-sm text-slate-400">Capstone</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#070b18] p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Premium Program
                  </p>
                  <h2 className="mt-2 text-2xl font-black">CyberAI Builder Track</h2>
                </div>
                <div className="rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950">
                  2026
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Ethical hacking mindset with AI-first awareness",
                  "Python automation for real security workflows",
                  "Threat intelligence and vulnerability reporting",
                  "LLM security, prompt injection, and guardrails",
                  "SOC-style log analysis and incident summaries",
                  "Capstone project for GitHub and interviews",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-300 to-violet-300 p-[1px]">
                <div className="rounded-2xl bg-[#070b18] p-5">
                  <p className="text-sm font-semibold text-slate-300">Core Promise</p>
                  <p className="mt-2 text-xl font-black">
                    Not just prompts. Not just tools. Real CyberAI thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center md:grid-cols-4">
          <p className="font-bold text-slate-300">Ethical Hacking</p>
          <p className="font-bold text-slate-300">AI Security</p>
          <p className="font-bold text-slate-300">Python Automation</p>
          <p className="font-bold text-slate-300">SOC Workflows</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Why this program exists
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Cybersecurity is no longer only about tools. It is about intelligent defense.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Attackers are using AI to move faster. Defenders need to become sharper,
              more systematic, and more automated. This program trains students to use
              AI responsibly for investigation, threat understanding, security reporting,
              and defensive automation.
            </p>
            <p>
              The course is built for learners who want premium, practical, portfolio-focused
              cybersecurity training instead of random tutorials, copied commands, or shallow AI prompts.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Cybersecurity First",
              text: "AI is taught as a professional layer on top of real security thinking, not as a shortcut.",
            },
            {
              title: "Builder Based",
              text: "Every major module helps students build tools, reports, workflows, or portfolio assets.",
            },
            {
              title: "Ethically Designed",
              text: "All learning follows responsible use, controlled labs, and clear legal boundaries.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                Student outcomes
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Learn to investigate, automate, defend, and report.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                This program is designed to create visible proof of skill through projects,
                documentation, demos, and security workflows.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Set up a safe cybersecurity lab",
                "Use AI responsibly for analysis",
                "Automate security tasks with Python",
                "Analyze phishing, logs, CVEs, and threat reports",
                "Understand LLM security risks",
                "Build portfolio-ready CyberAI tools",
                "Write professional security reports",
                "Present a final capstone project",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-bold shadow-sm">
                  <span className="mr-2 text-cyan-700">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
            Full curriculum
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
            A 12-week roadmap from cyber fundamentals to AI-powered defense projects.
          </h2>
        </div>

        <div className="mt-14 grid gap-5">
          {curriculum.map((item) => (
            <article
              key={item.week}
              className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.06] md:grid-cols-[140px_1fr_300px]"
            >
              <div>
                <p className="rounded-full bg-cyan-300/10 px-4 py-2 text-center text-sm font-black text-cyan-200">
                  {item.week}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.subtitle}</p>
              </div>
              <div className="grid gap-2">
                {item.outcomes.map((outcome) => (
                  <p key={outcome} className="rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300">
                    {outcome}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#07111f]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Portfolio projects
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Students graduate with real CyberAI project assets.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Each project is designed for GitHub, interviews, internships, academic profiles,
              and professional demonstrations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
                <h3 className="text-xl font-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Premium cohort experience
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Designed to feel serious, guided, and career-focused.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              This is positioned as a high-value professional program, not a cheap tutorial collection.
              Students receive structure, labs, projects, templates, and a capstone direction.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-violet-400/10 p-8">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Included
            </p>
            <div className="mt-6 grid gap-3">
              {bonuses.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 font-semibold text-slate-200">
                  ✓ {item}
                </div>
              ))}
            </div>
            <a
              href="#apply"
              className="mt-8 block rounded-full bg-cyan-300 px-8 py-4 text-center font-black text-slate-950 hover:bg-cyan-200"
            >
              Request Program Details
            </a>
          </div>
        </div>
      </section>

      <section id="mentor" className="bg-slate-50 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                Instructor
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight">
                Sundaram Mishra
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Sundaram teaches cybersecurity-first AI skills for learners who want to understand
                ethical hacking, secure systems, AI-assisted investigation, and modern cyber defense workflows.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Teaching philosophy
              </p>
              <p className="mt-5 text-2xl font-black leading-10">
                “Use AI as a security partner, not a shortcut. Learn the fundamentals,
                verify the outputs, build the tools, and stay responsible.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
            Clear, ethical, and professional.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-black">{faq.q}</h3>
              <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="bg-cyan-300 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em]">
            Enrollment inquiry
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Build AI tools that defend the digital world.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8">
            Join the CyberAI Security Professional Program and learn how to build
            ethical, practical, AI-powered cybersecurity workflows from scratch.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:your-email@example.com?subject=CyberAI Security Program Inquiry"
              className="rounded-full bg-slate-950 px-8 py-4 font-black text-white hover:bg-slate-800"
            >
              Email for Enrollment
            </a>
            <a
              href="https://wa.me/910000000000"
              className="rounded-full border border-slate-950 px-8 py-4 font-black hover:bg-slate-950 hover:text-white"
            >
              WhatsApp Inquiry
            </a>
          </div>

          <p className="mt-6 text-sm font-semibold">
            Replace the email and WhatsApp number with your official contact details.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p>© 2026 CyberAI Security Professional Program. All rights reserved.</p>
          <p>Ethical learning only. Controlled labs. Responsible AI use.</p>
        </div>
      </footer>
    </main>
  );
}
