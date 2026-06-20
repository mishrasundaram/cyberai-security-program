"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const copy = {
  en: {
    nav: {
      method: "Method",
      curriculum: "Curriculum",
      projects: "Projects",
      mentor: "Instructor",
    },
    brand: {
      title: "QuanVerse",
      subtitle: "Cybersecurity Mastery",
      community: "A Community by",
      partner: "QuanSkill",
    },
    languageButton: "🇻🇳 VN",
    eyebrow: "12-week premium cohort",
    heroTitle: "AI for Ethical Cybersecurity.",
    heroSubtitle:
      "A professional program by Sundaram Mishra for learners who want to build AI-powered security tools, automate analyst workflows, understand LLM defense, and graduate with portfolio-ready CyberAI projects.",
    heroNote:
      "Designed as a serious training pathway for ethical hacking, cyber defense, threat intelligence, phishing analysis, vulnerability reporting, and SOC-style investigation.",
    primaryCta: "View Curriculum",
    secondaryCta: "Explore Projects",
    dossierLabel: "Program dossier",
    dossierTitle: "CyberAI Builder Track",
    badge: "Flagship",
    stats: [
      ["12", "guided weeks"],
      ["8+", "practical builds"],
      ["1", "capstone project"],
      ["0", "reckless shortcuts"],
    ],
    dossierList: [
      "Ethical hacking mindset with AI-first awareness",
      "Python automation for repeatable security workflows",
      "Threat intelligence, phishing defense, and vulnerability reporting",
      "LLM security, prompt injection defense, and safe AI usage patterns",
      "SOC-style investigation, report writing, and final project presentation",
    ],
    focus: ["Ethical Hacking", "AI Security", "Python Automation", "SOC Workflows"],
    focusLabel: "Focus",
    methodEyebrow: "Program method",
    methodTitle: "A clean learning system for serious CyberAI builders.",
    methodSubtitle:
      "The course follows a professional progression: understand the security problem, investigate with AI support, automate repetitive work, and defend through responsible systems. Every chapter moves the learner closer to a portfolio-grade cybersecurity capability.",
    outcomesEyebrow: "Student outcomes",
    outcomesTitle: "Smaller promises. Stronger proof.",
    outcomesSubtitle:
      "Students do not only finish with knowledge. They finish with visible work: tools, reports, workflows, documentation, and a capstone project that can be shown professionally.",
    deliverableLabel: "Deliverable",
    curriculumEyebrow: "12-week curriculum",
    curriculumTitle: "From cyber foundations to AI-powered defense projects.",
    curriculumSubtitle:
      "Each chapter has a compact title, a deeper professional subtitle, and a clear project outcome. The structure is intentionally original and built around practical CyberAI workflows.",
    labLabel: "Lab outcome",
    projectsEyebrow: "Portfolio projects",
    projectsTitle: "A portfolio that looks like real capability.",
    projectsSubtitle:
      "The projects are designed to feel practical, explainable, and professional. They help learners demonstrate cybersecurity understanding, AI workflow design, automation ability, and ethical judgment.",
    projectDescription:
      "A guided build designed for GitHub documentation, project explanation, and professional presentation.",
    architectureEyebrow: "Course architecture",
    architectureTitle: "Built like a professional security workflow.",
    architectureSubtitle:
      "The course is structured to feel like how real security teams think: inputs, reasoning, automation, and polished outputs.",
    mentorEyebrow: "Instructor",
    mentorName: "Sundaram Mishra",
    mentorDescription:
      "Sundaram teaches cybersecurity-first AI skills for learners who want to understand ethical hacking, secure systems, AI-assisted investigation, and modern cyber defense workflows.",
    quote:
      "Use AI as a security partner, not a shortcut. Learn the fundamentals, verify the outputs, build the tools, and stay responsible.",
    faqEyebrow: "FAQ",
    faqTitle: "Clear, ethical, and professional.",
    faqSubtitle:
      "The program is positioned for serious learners who want practical skill, not unsafe shortcuts.",
    finalEyebrow: "Final position",
    finalTitle: "Not a prompt course. A CyberAI capability program.",
    finalSubtitle:
      "Designed for learners who want to move beyond tutorials and build practical, ethical, AI-powered cybersecurity workflows.",
    footerLeft: "© 2026 CyberAI Security Professional Program. All rights reserved.",
    footerRight: "Ethical learning only. Controlled labs. Responsible AI use.",
  },
  vi: {
    nav: {
      method: "Phương pháp",
      curriculum: "Lộ trình",
      projects: "Dự án",
      mentor: "Giảng viên",
    },
    brand: {
      title: "QuanVerse",
      subtitle: "Cybersecurity Mastery",
      community: "Cộng đồng bởi",
      partner: "QuanSkill",
    },
    languageButton: "🇬🇧 EN",
    eyebrow: "Chương trình cao cấp 12 tuần",
    heroTitle: "AI cho An ninh mạng Đạo đức.",
    heroSubtitle:
      "Một chương trình chuyên nghiệp do Sundaram Mishra giảng dạy, dành cho học viên muốn xây dựng công cụ an ninh mạng dùng AI, tự động hóa quy trình phân tích, hiểu bảo mật LLM và hoàn thiện các dự án CyberAI có thể đưa vào portfolio.",
    heroNote:
      "Được thiết kế như một lộ trình học nghiêm túc về ethical hacking, phòng thủ mạng, threat intelligence, phân tích phishing, báo cáo lỗ hổng và điều tra theo phong cách SOC.",
    primaryCta: "Xem lộ trình",
    secondaryCta: "Xem dự án",
    dossierLabel: "Hồ sơ chương trình",
    dossierTitle: "CyberAI Builder Track",
    badge: "Flagship",
    stats: [
      ["12", "tuần học có hướng dẫn"],
      ["8+", "dự án thực hành"],
      ["1", "dự án capstone"],
      ["0", "lối tắt nguy hiểm"],
    ],
    dossierList: [
      "Tư duy ethical hacking kết hợp nhận thức AI-first",
      "Tự động hóa Python cho quy trình an ninh mạng lặp lại",
      "Threat intelligence, phòng thủ phishing và báo cáo lỗ hổng",
      "Bảo mật LLM, phòng chống prompt injection và mô hình sử dụng AI an toàn",
      "Điều tra kiểu SOC, viết báo cáo và trình bày dự án cuối khóa",
    ],
    focus: ["Ethical Hacking", "AI Security", "Python Automation", "SOC Workflows"],
    focusLabel: "Trọng tâm",
    methodEyebrow: "Phương pháp học",
    methodTitle: "Một hệ thống học tập gọn gàng cho người xây dựng CyberAI nghiêm túc.",
    methodSubtitle:
      "Khóa học đi theo tiến trình chuyên nghiệp: hiểu vấn đề bảo mật, điều tra với AI hỗ trợ, tự động hóa công việc lặp lại và phòng thủ bằng hệ thống có trách nhiệm. Mỗi chương đưa học viên tiến gần hơn tới năng lực CyberAI có thể trình bày trong portfolio.",
    outcomesEyebrow: "Kết quả học viên",
    outcomesTitle: "Cam kết gọn hơn. Bằng chứng mạnh hơn.",
    outcomesSubtitle:
      "Học viên không chỉ kết thúc khóa học với kiến thức. Họ có sản phẩm nhìn thấy được: công cụ, báo cáo, workflow, tài liệu và một dự án capstone có thể trình bày chuyên nghiệp.",
    deliverableLabel: "Sản phẩm",
    curriculumEyebrow: "Lộ trình 12 tuần",
    curriculumTitle: "Từ nền tảng an ninh mạng đến dự án phòng thủ dùng AI.",
    curriculumSubtitle:
      "Mỗi chương có tiêu đề ngắn gọn, phần mô tả chuyên nghiệp sâu hơn và một kết quả thực hành rõ ràng. Cấu trúc được xây dựng độc lập quanh các workflow CyberAI thực tế.",
    labLabel: "Kết quả lab",
    projectsEyebrow: "Dự án portfolio",
    projectsTitle: "Một portfolio thể hiện năng lực thật.",
    projectsSubtitle:
      "Các dự án được thiết kế để thực tế, dễ giải thích và chuyên nghiệp. Học viên có thể chứng minh hiểu biết an ninh mạng, thiết kế workflow AI, khả năng tự động hóa và tư duy đạo đức.",
    projectDescription:
      "Một dự án có hướng dẫn, phù hợp để viết tài liệu GitHub, giải thích khi phỏng vấn và trình bày chuyên nghiệp.",
    architectureEyebrow: "Kiến trúc khóa học",
    architectureTitle: "Được xây dựng như một workflow bảo mật chuyên nghiệp.",
    architectureSubtitle:
      "Khóa học được cấu trúc giống cách đội ngũ bảo mật thật suy nghĩ: đầu vào, suy luận, tự động hóa và đầu ra được hoàn thiện.",
    mentorEyebrow: "Giảng viên",
    mentorName: "Sundaram Mishra",
    mentorDescription:
      "Sundaram giảng dạy kỹ năng AI đặt an ninh mạng làm trung tâm cho học viên muốn hiểu ethical hacking, hệ thống an toàn, điều tra với AI hỗ trợ và workflow phòng thủ mạng hiện đại.",
    quote:
      "Hãy dùng AI như một cộng sự bảo mật, không phải lối tắt. Học nền tảng, kiểm chứng đầu ra, xây dựng công cụ và luôn có trách nhiệm.",
    faqEyebrow: "Câu hỏi thường gặp",
    faqTitle: "Rõ ràng, đạo đức và chuyên nghiệp.",
    faqSubtitle:
      "Chương trình dành cho học viên nghiêm túc muốn có kỹ năng thực tế, không phải những lối tắt thiếu an toàn.",
    finalEyebrow: "Định vị cuối cùng",
    finalTitle: "Không phải khóa prompt. Đây là chương trình năng lực CyberAI.",
    finalSubtitle:
      "Dành cho học viên muốn vượt qua mức tutorial và xây dựng workflow an ninh mạng thực tế, đạo đức, có hỗ trợ bởi AI.",
    footerLeft: "© 2026 CyberAI Security Professional Program. All rights reserved.",
    footerRight: "Học tập đạo đức. Lab có kiểm soát. Sử dụng AI có trách nhiệm.",
  },
};

const data = {
  en: {
    pillars: [
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
    ],
    outcomes: [
      "Safe cybersecurity lab setup",
      "Cybersecurity prompt playbook",
      "Python IOC extraction toolkit",
      "Threat intelligence brief workflow",
      "Vulnerability risk reporting assistant",
      "Prompt injection defense checker",
      "AI phishing analysis system",
      "SOC-style log investigation copilot",
    ],
    chapters: [
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
    ],
    projects: [
      "AI Phishing Risk Analyzer",
      "Threat Intelligence Brief Generator",
      "Vulnerability Report Assistant",
      "Prompt Injection Defense Checker",
      "SOC Log Investigation Copilot",
      "Malware Triage Report Assistant",
    ],
    architecture: [
      ["Input", "Threat reports, phishing samples, logs, CVEs, prompts, and security cases."],
      ["Reasoning", "AI-assisted analysis with verification, context, ethics, and analyst judgment."],
      ["Automation", "Python tools, structured workflows, rule-based checks, and report generation."],
      ["Output", "Portfolio projects, investigation summaries, documentation, and capstone demo."],
    ],
    faqs: [
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
    ],
  },
  vi: {
    pillars: [
      {
        title: "Tư duy",
        text: "Hiểu rủi ro an ninh mạng, hành vi tấn công, ranh giới đạo đức và giới hạn của AI trước khi dùng công cụ.",
      },
      {
        title: "Điều tra",
        text: "Phân tích log, email phishing, báo cáo threat, lỗ hổng và hành vi đáng ngờ với AI hỗ trợ.",
      },
      {
        title: "Tự động hóa",
        text: "Xây dựng workflow Python và AI để giảm việc lặp lại của analyst và tăng tính nhất quán.",
      },
      {
        title: "Phòng thủ",
        text: "Thiết kế mô hình sử dụng AI an toàn, guardrail cho LLM, workflow SOC và báo cáo phản ứng chuyên nghiệp.",
      },
    ],
    outcomes: [
      "Thiết lập lab an ninh mạng an toàn",
      "Cybersecurity prompt playbook",
      "Bộ công cụ Python trích xuất IOC",
      "Workflow viết threat intelligence brief",
      "Trợ lý báo cáo rủi ro lỗ hổng",
      "Công cụ kiểm tra prompt injection",
      "Hệ thống phân tích phishing bằng AI",
      "SOC-style log investigation copilot",
    ],
    chapters: [
      {
        week: "01",
        title: "CyberAI Mindset",
        subtitle:
          "AI đang thay đổi ethical hacking, phòng thủ mạng, workflow của analyst và tương lai nghề nghiệp an ninh mạng như thế nào.",
        lab: "Bản đồ nghề nghiệp CyberAI và checklist sử dụng AI có trách nhiệm",
      },
      {
        week: "02",
        title: "Secure Lab",
        subtitle:
          "Thiết kế lab an ninh mạng cô lập, an toàn với Kali Linux, máy ảo, workspace Python, cấu trúc GitHub và quy tắc kiểm thử có kiểm soát.",
        lab: "Tài liệu thiết lập lab chuyên nghiệp",
      },
      {
        week: "03",
        title: "Security Prompting",
        subtitle:
          "Dùng AI như một cộng sự suy luận an ninh mạng cho giải thích threat, đọc log, hiểu lỗ hổng và soạn báo cáo.",
        lab: "Cybersecurity prompt playbook",
      },
      {
        week: "04",
        title: "Python Automation",
        subtitle:
          "Xây dựng công cụ Python nhỏ nhưng hữu ích cho trích xuất IOC, phân tích file, detection bằng regex, xử lý log và tiện ích bảo mật.",
        lab: "IOC extractor và log parser",
      },
      {
        week: "05",
        title: "Threat Intelligence",
        subtitle:
          "Chuyển báo cáo cyber thô thành intelligence brief sẵn sàng cho analyst bằng tóm tắt AI, phân loại và tư duy kiểu MITRE.",
        lab: "AI threat intelligence brief generator",
      },
      {
        week: "06",
        title: "Vulnerability Analysis",
        subtitle:
          "Hiểu CVE, CWE, CVSS, tác động kinh doanh, kế hoạch remediation và giải thích lỗ hổng chuyên nghiệp với AI hỗ trợ.",
        lab: "Vulnerability risk assistant",
      },
      {
        week: "07",
        title: "LLM Security",
        subtitle:
          "Nghiên cứu prompt injection, jailbreak, unsafe tool use, rò rỉ dữ liệu, guardrail và kiến trúc phòng thủ cho ứng dụng AI.",
        lab: "Prompt injection defense checker",
      },
      {
        week: "08",
        title: "Phishing Defense",
        subtitle:
          "Phân tích phishing qua tín hiệu ngôn ngữ, sai lệch người gửi, link đáng ngờ, tính khẩn cấp và dấu hiệu social engineering.",
        lab: "AI phishing risk analyzer",
      },
      {
        week: "09",
        title: "Malware Triage",
        subtitle:
          "Học tư duy phân tích malware an toàn qua hash, strings, báo cáo sandbox, chỉ báo hành vi và triage summary do AI hỗ trợ.",
        lab: "Malware triage report assistant",
      },
      {
        week: "10",
        title: "AI SOC Operations",
        subtitle:
          "Xây dựng workflow giám sát có AI hỗ trợ cho log, alert, hoạt động đáng ngờ, timeline incident và summary điều tra bảo mật.",
        lab: "SOC log investigation copilot",
      },
      {
        week: "11",
        title: "Security Agents",
        subtitle:
          "Thiết kế AI security assistant có kiểm soát để đọc file, phân loại incident, đề xuất phản ứng và tạo báo cáo analyst.",
        lab: "CyberAI assistant workflow",
      },
      {
        week: "12",
        title: "Capstone Lab",
        subtitle:
          "Xây dựng sản phẩm CyberAI có thể đưa vào portfolio với kiến trúc, tài liệu GitHub, demo assets và báo cáo cuối khóa chuyên nghiệp.",
        lab: "Dự án capstone cuối khóa",
      },
    ],
    projects: [
      "AI Phishing Risk Analyzer",
      "Threat Intelligence Brief Generator",
      "Vulnerability Report Assistant",
      "Prompt Injection Defense Checker",
      "SOC Log Investigation Copilot",
      "Malware Triage Report Assistant",
    ],
    architecture: [
      ["Đầu vào", "Báo cáo threat, mẫu phishing, log, CVE, prompt và tình huống bảo mật."],
      ["Suy luận", "Phân tích với AI hỗ trợ, có kiểm chứng, bối cảnh, đạo đức và phán đoán của analyst."],
      ["Tự động hóa", "Công cụ Python, workflow có cấu trúc, rule-based checks và tạo báo cáo."],
      ["Đầu ra", "Dự án portfolio, summary điều tra, tài liệu và demo capstone."],
    ],
    faqs: [
      {
        q: "Đây có phải khóa học lối tắt để hacking không?",
        a: "Không. Đây là chương trình AI và an ninh mạng chuyên nghiệp, tập trung vào học tập đạo đức, tư duy phòng thủ, lab có kiểm soát và workflow bảo mật thực tế.",
      },
      {
        q: "Khóa học có dự án không?",
        a: "Có. Mỗi phần chính tạo ra một dự án CyberAI thực hành, và khóa học kết thúc bằng capstone có thể đưa lên GitHub và trình bày chuyên nghiệp.",
      },
      {
        q: "Người mới bắt đầu học được không?",
        a: "Có. Khóa học bắt đầu từ nền tảng, sau đó đi dần vào AI security, Python automation, LLM defense và workflow kiểu SOC.",
      },
      {
        q: "Điều gì làm chương trình này cao cấp?",
        a: "Chương trình tập trung vào portfolio outcome, báo cáo chuyên nghiệp, lab có hướng dẫn, ranh giới đạo đức và tư duy xây dựng sản phẩm CyberAI thật.",
      },
    ],
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const d = data[lang];

  function toggleLanguage() {
    setLang((current) => (current === "en" ? "vi" : "en"));
  }

  return (
    <main>
      <header className="page-shell site-header">
        <a href="#" className="qv-brand" aria-label="QuanVerse Cybersecurity Mastery">
          <span className="qv-main">
            <span className="qv-mark" aria-hidden="true">
              <span className="qv-mark-blue" />
              <span className="qv-mark-gold" />
            </span>
            <span>
              <span className="qv-title">{t.brand.title}</span>
              <span className="qv-subtitle">{t.brand.subtitle}</span>
            </span>
          </span>

          <span className="qv-community">
            <span>{t.brand.community}</span>
            <span className="qv-mini-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <strong>{t.brand.partner}</strong>
          </span>
        </a>

        <div className="header-actions">
          <nav className="nav">
            <a href="#method">{t.nav.method}</a>
            <a href="#curriculum">{t.nav.curriculum}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#mentor">{t.nav.mentor}</a>
          </nav>

          <button className="language-toggle" type="button" onClick={toggleLanguage}>
            {t.languageButton}
          </button>
        </div>
      </header>

      <section className="page-shell hero">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>

          <h1 className="display hero-title">{t.heroTitle}</h1>

          <p className="hero-subtitle">{t.heroSubtitle}</p>

          <p className="hero-note">{t.heroNote}</p>

          <div className="hero-actions">
            <a href="#curriculum" className="button primary">{t.primaryCta}</a>
            <a href="#projects" className="button secondary">{t.secondaryCta}</a>
          </div>
        </div>

        <aside className="program-dossier">
          <div className="dossier-top">
            <div>
              <p className="dossier-label">{t.dossierLabel}</p>
              <h2 className="display dossier-title">{t.dossierTitle}</h2>
            </div>
            <span className="dossier-badge">{t.badge}</span>
          </div>

          <div className="dossier-grid">
            {t.stats.map(([number, label]) => (
              <div className="dossier-stat" key={`${number}-${label}`}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <ul className="dossier-list">
            {t.dossierList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="strip">
        <div className="page-shell strip-inner">
          {t.focus.map((item) => (
            <div className="strip-item" key={item}>
              <small>{t.focusLabel}</small>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="method" className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">{t.methodEyebrow}</p>
            <h2 className="display section-title">{t.methodTitle}</h2>
          </div>

          <p className="section-subtitle">{t.methodSubtitle}</p>
        </div>

        <div className="pillars">
          {d.pillars.map((pillar, index) => (
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
              <p className="eyebrow">{t.outcomesEyebrow}</p>
              <h2 className="display section-title">{t.outcomesTitle}</h2>
            </div>

            <p className="section-subtitle">{t.outcomesSubtitle}</p>
          </div>

          <div className="outcome-grid">
            {d.outcomes.map((item) => (
              <article className="outcome-card" key={item}>
                <small>{t.deliverableLabel}</small>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">{t.curriculumEyebrow}</p>
            <h2 className="display section-title">{t.curriculumTitle}</h2>
          </div>

          <p className="section-subtitle">{t.curriculumSubtitle}</p>
        </div>

        <div className="curriculum-list">
          {d.chapters.map((chapter) => (
            <article className="chapter-row" key={chapter.week}>
              <div className="chapter-week">{chapter.week}</div>
              <h3 className="chapter-title">{chapter.title}</h3>
              <p className="chapter-copy">{chapter.subtitle}</p>
              <p className="chapter-lab">
                <span>{t.labLabel}</span>
                {chapter.lab}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="page-shell section">
        <div className="projects-layout">
          <div>
            <p className="eyebrow">{t.projectsEyebrow}</p>
            <h2 className="display section-title">{t.projectsTitle}</h2>
            <p className="hero-note">{t.projectsSubtitle}</p>
          </div>

          <div className="project-grid">
            {d.projects.map((project, index) => (
              <article className="project-card" key={project}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{project}</h3>
                <p>{t.projectDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">{t.architectureEyebrow}</p>
            <h2 className="display section-title">{t.architectureTitle}</h2>
          </div>

          <p className="section-subtitle">{t.architectureSubtitle}</p>
        </div>

        <div className="architecture">
          {d.architecture.map(([label, text]) => (
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
              <p className="eyebrow">{t.mentorEyebrow}</p>
              <h2 className="display section-title">{t.mentorName}</h2>
              <p>{t.mentorDescription}</p>
            </div>

            <div className="quote-box">
              <p className="display">“{t.quote}”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">{t.faqEyebrow}</p>
            <h2 className="display section-title">{t.faqTitle}</h2>
          </div>

          <p className="section-subtitle">{t.faqSubtitle}</p>
        </div>

        <div className="faq-list">
          {d.faqs.map((faq) => (
            <article className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-panel">
        <div className="page-shell">
          <p className="eyebrow">{t.finalEyebrow}</p>
          <h2 className="display">{t.finalTitle}</h2>
          <p>{t.finalSubtitle}</p>
        </div>
      </section>

      <footer className="page-shell footer">
        <p>{t.footerLeft}</p>
        <p>{t.footerRight}</p>
      </footer>
    </main>
  );
}
