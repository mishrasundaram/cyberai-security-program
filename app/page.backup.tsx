const chapters = [
  {
    week: "01",
    title: "CyberAI Mindset",
    subtitle:
      "How artificial intelligence is reshaping ethical hacking, cyber defense, analyst workflows, and the future of security careers.",
    lab: "CyberAI career map + responsible AI security checklist",
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
      "Build small but powerful Python tools for IOC extraction, file parsing, regex-based detection, log processing, and security utilities.",
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

const projectCards = [
  "AI Phishing Risk Analyzer",
  "Threat Intelligence Brief Generator",
  "Vulnerability Report Assistant",
  "Prompt Injection Defense Checker",
  "SOC Log Investigation Copilot",
  "Malware Triage Report Assistant",
];

const pillars = [
  {
    title: "Think",
    text: "Understand cyber risk, attacker behavior, ethical boundaries, and AI limitations before touching tools.",
  },
  {
    title: "Investigate",
    text: "Use AI to reason through logs, phishing emails, threat reports, vulnerabilities, and suspicious behavior.",
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

const faqs = [
  {
    q: "Is this a hacking shortcut course?",
    a: "No. It is a professional AI + cybersecurity program focused on ethical learning, defensive thinking, controlled labs, and real security workflows.",
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
    <main className="min-h-screen overflow-hidden bg-[#02030a] text-white">
      <section className="relative min-h-screen grid-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(103,232,249,0.16),transparent_32%),radial-gradient(circle_at_86%_12%,rgba(168,85,247,0.13),transparent_32%),linear-gradient(180deg,rgba(2,3,10,0.55),#02030a_85%)]" />
        <div className="absolute left-1/2 top-32 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
          <a href="#" className="leading-none">
            <p className="text-base font-black tracking-[0.18em] text-white">
              CYBERAI
            </p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.38em] text-slate-400">
              Security Professional Program
            </p>
          </a>

          <nav className="hidden items-center gap-9 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 md:flex">
            <a href="#curriculum" className="hover:text-white">Curriculum</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#method" className="hover:text-white">Method</a>
            <a href="#mentor" className="hover:text-white">Instructor</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:pb-32 lg:pt-20">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
              12-Week Premium Cohort
            </div>

            <p className="display-font text-4xl font-semibold leading-none text-white md:text-5xl">
              CyberAI Security
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.04] tracking-[-0.04em] text-white md:text-6xl">
              Ethical cybersecurity training for the age of artificial intelligence.
            </h1>

            <p className="mt-8 max-w-3xl text-2xl leading-10 text-slate-300 md:text-[1.7rem]">
              A premium professional program by{" "}
              <span className="font-bold text-white">Sundaram Mishra</span> for learners who want
              to build AI-powered security tools, automate analyst workflows, understand LLM defense,
              and graduate with portfolio-ready CyberAI projects.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#curriculum"
                className="rounded-full bg-white px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                View Curriculum
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Projects
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/18 via-violet-400/12 to-amber-300/10 blur-3xl" />

            <div className="relative premium-card rounded-[2.2rem] p-5">
              <div className="rounded-[1.7rem] border border-white/10 bg-[#050816]/90 p-7">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                    <p className="display-font text-6xl font-semibold gold-text">12</p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.26em] text-slate-400">
                      Guided Weeks
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                    <p className="display-font text-6xl font-semibold gold-text">8+</p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.26em] text-slate-400">
                      CyberAI Builds
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                    Signature Outcome
                  </p>
                  <p className="display-font mt-4 text-4xl font-semibold leading-[1.05]">
                    Build AI tools that defend the digital world.
                  </p>
                  <p className="mt-5 text-base leading-7 text-slate-300">
                    Not just prompts. Not just tools. A complete CyberAI builder mindset
                    for ethical security, automation, and defense.
                  </p>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    "LLM security and prompt injection defense",
                    "Python automation for security workflows",
                    "Threat intelligence and vulnerability reporting",
                    "SOC-style investigation and analyst summaries",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <p className="text-sm text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-4">
          {["Ethical Hacking", "AI Security", "Python Automation", "SOC Workflows"].map((item) => (
            <div key={item} className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-slate-400">
                Focus
              </p>
              <p className="mt-2 text-lg font-bold text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="method" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
              Program Method
            </p>
            <h2 className="display-font mt-5 text-5xl font-semibold leading-[1.02] md:text-6xl">
              A clean learning system for serious CyberAI builders.
            </h2>
          </div>

          <p className="text-2xl leading-10 text-slate-300">
            The program is built around a professional progression: understand the security problem,
            investigate using AI, automate repetitive work, and defend with responsible systems.
            Every chapter moves the learner closer to a portfolio-grade CyberAI capability.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="premium-card rounded-[2rem] p-7">
              <p className="display-font text-5xl font-semibold gold-text">
                0{index + 1}
              </p>
              <h3 className="mt-5 text-2xl font-black">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fafc] text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-700">
                Student Outcomes
              </p>
              <h2 className="display-font mt-5 text-5xl font-semibold leading-[1.02] md:text-6xl">
                Smaller promises. Stronger proof.
              </h2>
              <p className="mt-7 text-2xl leading-10 text-slate-600">
                Students do not only finish with knowledge. They finish with visible work:
                tools, reports, workflows, documentation, and a capstone project.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">
                    Deliverable
                  </p>
                  <p className="mt-3 text-lg font-black text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
            12-Week Curriculum
          </p>
          <h2 className="display-font mt-5 text-5xl font-semibold leading-[1.02] md:text-6xl">
            From cyber foundations to AI-powered defense projects.
          </h2>
          <p className="mt-7 text-2xl leading-10 text-slate-300">
            Each chapter has a compact title, a deeper professional subtitle, and a clear project outcome.
          </p>
        </div>

        <div className="mt-16 grid gap-5">
          {chapters.map((chapter) => (
            <article
              key={chapter.week}
              className="premium-card grid gap-7 rounded-[2rem] p-7 md:grid-cols-[100px_1fr_320px]"
            >
              <div>
                <p className="display-font text-5xl font-semibold gold-text">
                  {chapter.week}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em]">
                  {chapter.title}
                </h3>
                <p className="mt-4 text-xl leading-8 text-slate-300">
                  {chapter.subtitle}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  Lab Outcome
                </p>
                <p className="mt-3 text-base font-bold leading-7 text-white">
                  {chapter.lab}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#07111f]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                Portfolio Projects
              </p>
              <h2 className="display-font mt-5 text-5xl font-semibold leading-[1.02] md:text-6xl">
                A portfolio that looks like real capability.
              </h2>
            </div>

            <p className="text-2xl leading-10 text-slate-300">
              The projects are designed to feel practical, explainable, and professional.
              They help learners demonstrate cybersecurity understanding, AI workflow design,
              automation ability, and ethical security judgment.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectCards.map((project, index) => (
              <div key={project} className="premium-card rounded-[2rem] p-7">
                <p className="display-font text-4xl font-semibold gold-text">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.03em]">
                  {project}
                </h3>
                <p className="mt-5 leading-7 text-slate-300">
                  A guided build designed for GitHub documentation, project explanation,
                  and professional presentation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="premium-card rounded-[2.4rem] p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                Course Architecture
              </p>
              <h2 className="display-font mt-5 text-5xl font-semibold leading-[1.02] md:text-6xl">
                Built like a professional security workflow.
              </h2>
            </div>

            <div className="grid gap-4">
              {[
                ["Input", "Threat reports, phishing samples, logs, CVEs, prompts, and security cases."],
                ["Reasoning", "AI-assisted analysis with verification, context, ethics, and analyst judgment."],
                ["Automation", "Python tools, structured workflows, rule-based checks, and report generation."],
                ["Output", "Portfolio projects, investigation summaries, documentation, and capstone demo."],
              ].map(([label, text]) => (
                <div key={label} className="grid gap-4 rounded-3xl border border-white/10 bg-black/20 p-5 md:grid-cols-[120px_1fr]">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                    {label}
                  </p>
                  <p className="text-lg leading-8 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mentor" className="bg-[#f8fafc] text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 rounded-[2.4rem] bg-white p-8 shadow-2xl shadow-slate-200/70 md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-700">
                Instructor
              </p>
              <h2 className="display-font mt-5 text-5xl font-semibold">
                Sundaram Mishra
              </h2>
              <p className="mt-7 text-xl leading-9 text-slate-600">
                Teaching cybersecurity-first AI skills for learners who want to understand
                ethical hacking, secure systems, AI-assisted investigation, and modern cyber defense workflows.
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                Teaching Philosophy
              </p>
              <p className="display-font mt-6 text-4xl font-semibold leading-[1.12]">
                “Use AI as a security partner, not a shortcut. Learn the fundamentals,
                verify the outputs, build the tools, and stay responsible.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
            FAQ
          </p>
          <h2 className="display-font mt-5 text-5xl font-semibold leading-[1.02] md:text-6xl">
            Clear, ethical, and professional.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="premium-card rounded-[2rem] p-7">
              <h3 className="text-2xl font-black tracking-[-0.03em]">{faq.q}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.035] grid-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.12),transparent_44%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-200">
            Final Position
          </p>
          <h2 className="display-font mx-auto mt-6 max-w-5xl text-6xl font-semibold leading-[0.96] md:text-7xl">
            Not a prompt course. A CyberAI capability program.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-2xl leading-10 text-slate-300">
            Designed for learners who want to move beyond tutorials and build practical,
            ethical, AI-powered cybersecurity workflows.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p>© 2026 CyberAI Security Professional Program. All rights reserved.</p>
          <p>Ethical learning only. Controlled labs. Responsible AI use.</p>
        </div>
      </footer>
    </main>
  );
}
