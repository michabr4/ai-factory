/* AI Factory Framework — Role & Framework Data */

const FRAMEWORK = {
  title: "AI Factory Framework",
  subtitle: "Transforming Cisco CX into an Agent-Powered Operating Model",
  tagline: "Every role evolves. Every process accelerates. Every customer wins.",

  pillars: [
    {
      id: "evolution",
      icon: "arrow-up-circle",
      title: "Role Evolution",
      color: "blue",
      headline: "From Doers to Designers",
      description: "Every CX role evolves from executing tasks manually to designing, building, and supervising AI agents that perform those tasks. People become agent architects and orchestrators.",
      keyShift: "Manual Executor → Agent Designer & Orchestrator",
      outcomes: [
        "People focus on judgment, relationships, and strategy",
        "Repetitive work is handled by purpose-built agents",
        "Career paths expand into agent design and AI ops",
        "Domain expertise becomes the blueprint for agent behavior"
      ]
    },
    {
      id: "productivity",
      icon: "zap",
      title: "Productivity Multiplier",
      color: "purple",
      headline: "Same People, 10x Impact",
      description: "AI agents amplify each role's capacity — reducing cycle times, eliminating bottlenecks, and unlocking throughput that was previously impossible with manual processes alone.",
      keyShift: "Linear Capacity → Exponential Throughput",
      outcomes: [
        "Cycle time reduced by 40-80% on key workflows",
        "Each person effectively manages 3-5x their current portfolio",
        "Zero-lag handoffs between process stages",
        "Data-driven decisions replace gut-feel prioritization"
      ]
    },
    {
      id: "operating-model",
      icon: "factory",
      title: "New Operating Model",
      color: "emerald",
      headline: "The AI Factory IS the CX Model",
      description: "The entire CX organization operates as an AI Factory — roles are redefined around the agent lifecycle. Every team member participates in a continuous loop of identifying, building, deploying, governing, and scaling agents.",
      keyShift: "Functional Silos → Agent Lifecycle Teams",
      outcomes: [
        "Unified operating model across all CX functions",
        "Continuous improvement driven by agent performance data",
        "Governance built into every stage, not bolted on after",
        "Scalable: what works for one customer works for thousands"
      ]
    }
  ],

  lifecycle: [
    {
      stage: "Identify",
      icon: "search",
      color: "sky",
      description: "Spot agent opportunities in daily workflows",
      activities: [
        "Map manual, repetitive tasks in your role",
        "Calculate time spent and cycle-time impact",
        "Prioritize by ROI and feasibility",
        "Document the current process as an agent spec"
      ],
      who: "Everyone — domain experts see what AI builders can't"
    },
    {
      stage: "Build",
      icon: "hammer",
      color: "blue",
      description: "Design and develop the agent",
      activities: [
        "Define agent inputs, logic, and outputs",
        "Choose tools and integrations (APIs, data sources)",
        "Build with human-in-the-loop checkpoints",
        "Test against real scenarios from your workflow"
      ],
      who: "Agent builders + domain experts as co-designers"
    },
    {
      stage: "Deploy",
      icon: "rocket",
      color: "indigo",
      description: "Put the agent to work in production",
      activities: [
        "Start with draft-first / human-approved outputs",
        "Run parallel: agent + human for validation period",
        "Monitor accuracy, speed, and user trust",
        "Iterate based on real-world feedback"
      ],
      who: "Delivery leads + the humans the agent supports"
    },
    {
      stage: "Govern",
      icon: "shield-check",
      color: "violet",
      description: "Ensure quality, security, and compliance",
      activities: [
        "Set approval gates for agent actions",
        "Track agent decisions and audit trail",
        "Define escalation paths for edge cases",
        "Review performance weekly with stakeholders"
      ],
      who: "CX leaders + security/compliance partners"
    },
    {
      stage: "Scale",
      icon: "trending-up",
      color: "purple",
      description: "Expand what works across the org",
      activities: [
        "Package successful agents as templates",
        "Share across teams and geographies",
        "Chain agents together for end-to-end automation",
        "Feed learnings back into the Identify stage"
      ],
      who: "AI Factory program team + CX leadership"
    }
  ],

  maturityLevels: [
    {
      level: 1,
      name: "Manual",
      color: "slate",
      description: "All work done by humans, no agent involvement",
      characteristics: [
        "Processes live in email, spreadsheets, and tribal knowledge",
        "Cycle times are long and unpredictable",
        "Quality depends entirely on individual skill",
        "No systematic measurement of process performance"
      ]
    },
    {
      level: 2,
      name: "Assisted",
      color: "blue",
      description: "Agents help with specific tasks, humans drive",
      characteristics: [
        "AI tools used for research, drafting, summarization",
        "Humans review and approve all agent outputs",
        "Some tasks are faster, but workflows are still manual",
        "First KPIs being tracked (cycle time, accuracy)"
      ]
    },
    {
      level: 3,
      name: "Augmented",
      color: "violet",
      description: "Agents handle workflows, humans supervise",
      characteristics: [
        "Multi-step agent chains execute end-to-end processes",
        "Human-in-the-loop gates at critical decision points",
        "Measurable cycle-time reduction (40%+)",
        "Agent performance dashboards in active use"
      ]
    },
    {
      level: 4,
      name: "Autonomous",
      color: "emerald",
      description: "Agents operate independently with governance",
      characteristics: [
        "Agents run full workflows with exception-only human review",
        "Self-improving through feedback loops and metrics",
        "80%+ cycle-time reduction on automated processes",
        "Organization operates as a true AI Factory"
      ]
    }
  ]
};

const CX_ROLES = [
  {
    id: "csm",
    title: "Customer Success Manager",
    abbrev: "CSM",
    icon: "heart-handshake",
    color: "blue",
    currentState: {
      summary: "Manages customer health, drives adoption, and ensures renewals through relationship management and manual account monitoring.",
      painPoints: [
        "Manually tracking health scores across dozens of accounts",
        "Reactive — issues surface through customer complaints",
        "Time spent compiling QBR decks instead of strategizing",
        "Renewal risk identified too late to intervene"
      ]
    },
    factoryState: {
      newRole: "Customer Success Architect",
      summary: "Designs and orchestrates AI agents that continuously monitor customer health, predict risk, drive proactive engagement, and auto-generate strategic insights.",
      agents: [
        { name: "Health Pulse Agent", desc: "Continuously monitors product telemetry, support tickets, and engagement signals to produce real-time health scores" },
        { name: "Renewal Risk Predictor", desc: "Analyzes patterns across data sources to flag at-risk renewals 90+ days before expiry" },
        { name: "QBR Generator", desc: "Auto-compiles quarterly business review decks from usage data, tickets, and outcomes" },
        { name: "Proactive Outreach Drafter", desc: "Drafts personalized outreach emails based on health signals (human approves before send)" }
      ],
      kpis: [
        { metric: "Time to Risk Detection", before: "Weeks", after: "Hours" },
        { metric: "QBR Prep Time", before: "8-12 hours", after: "30 min review" },
        { metric: "Accounts per CSM", before: "15-25", after: "50-75" },
        { metric: "Proactive vs Reactive Ratio", before: "20/80", after: "70/30" }
      ]
    },
    maturityPath: "Manual health checks → AI-assisted scoring → Agent-driven engagement → Autonomous success orchestration"
  },
  {
    id: "tam",
    title: "Technical Account Manager",
    abbrev: "TAM",
    icon: "cpu",
    color: "indigo",
    currentState: {
      summary: "Provides proactive technical guidance, manages escalations, and ensures customers get maximum value from deployed solutions.",
      painPoints: [
        "Drowning in case management and escalation handling",
        "Technical advice is reactive, not anticipatory",
        "Knowledge trapped in individual expertise silos",
        "Limited time for strategic technical planning"
      ]
    },
    factoryState: {
      newRole: "Technical Intelligence Architect",
      summary: "Designs agents that monitor technical environments, predict issues before they happen, auto-triage cases, and deliver proactive technical recommendations.",
      agents: [
        { name: "Environment Health Monitor", desc: "Continuously analyzes customer infrastructure telemetry and flags anomalies before they become incidents" },
        { name: "Case Classification Agent", desc: "Auto-classifies incoming cases by severity, product, and likely resolution path" },
        { name: "Knowledge Synthesizer", desc: "Mines TAC cases, release notes, and bugs to surface relevant intelligence per customer context" },
        { name: "Technical Advisory Drafter", desc: "Generates proactive technical recommendations based on environment changes and known issues" }
      ],
      kpis: [
        { metric: "Mean Time to Case Classification", before: "2-4 hours", after: "< 5 min" },
        { metric: "Proactive Issue Detection", before: "10%", after: "60%+" },
        { metric: "Time Spent on Escalation Mgmt", before: "40% of week", after: "15%" },
        { metric: "Knowledge Reuse Rate", before: "Low", after: "80%+" }
      ]
    },
    maturityPath: "Manual case triage → AI-assisted classification → Agent-driven monitoring → Autonomous technical operations"
  },
  {
    id: "htom",
    title: "High Touch Operations Manager",
    abbrev: "HTOM",
    icon: "settings",
    color: "violet",
    currentState: {
      summary: "Oversees operational delivery for high-value customers, coordinating resources, tracking SLAs, and managing complex engagements.",
      painPoints: [
        "Manually tracking SLAs and deliverables across multiple workstreams",
        "Resource coordination across time zones is error-prone",
        "Status reporting consumes days of effort each cycle",
        "Early warning signs of delivery risk are missed"
      ]
    },
    factoryState: {
      newRole: "Operations Intelligence Lead",
      summary: "Architects agents that automate operational oversight — real-time SLA tracking, resource optimization, risk detection, and automated stakeholder reporting.",
      agents: [
        { name: "SLA Sentinel", desc: "Real-time SLA monitoring with automatic alerting when thresholds approach breach" },
        { name: "Resource Optimizer", desc: "Analyzes workload, skills, and availability to recommend optimal resource allocation" },
        { name: "Status Report Generator", desc: "Auto-compiles delivery status reports from project tools, tickets, and milestones" },
        { name: "Delivery Risk Radar", desc: "Scans engagement data patterns to flag delivery risks before they materialize" }
      ],
      kpis: [
        { metric: "Status Report Creation", before: "1-2 days", after: "Auto-generated" },
        { metric: "SLA Breach Detection", before: "Post-breach", after: "Predictive" },
        { metric: "Resource Utilization", before: "65%", after: "85%+" },
        { metric: "Delivery Risk Lead Time", before: "Days", after: "Weeks ahead" }
      ]
    },
    maturityPath: "Manual tracking → AI-assisted monitoring → Agent-driven operations → Autonomous delivery orchestration"
  },
  {
    id: "dpm",
    title: "Delivery Project Manager",
    abbrev: "DPM",
    icon: "gantt-chart",
    color: "sky",
    currentState: {
      summary: "Manages implementation projects end-to-end — planning, scheduling, risk management, and stakeholder communication for CX engagements.",
      painPoints: [
        "Project plans go stale within days of creation",
        "Manual dependency tracking leads to missed connections",
        "Stakeholder updates are time-consuming and repetitive",
        "Lessons learned rarely get captured or reused"
      ]
    },
    factoryState: {
      newRole: "Delivery Automation Architect",
      summary: "Designs agents that keep project plans alive, automate stakeholder communication, predict schedule risks, and capture institutional knowledge automatically.",
      agents: [
        { name: "Living Plan Agent", desc: "Continuously updates project plans based on actual progress, dependencies, and team velocity" },
        { name: "Stakeholder Communicator", desc: "Drafts and sends project updates tailored to each stakeholder's level of detail" },
        { name: "Schedule Risk Predictor", desc: "Analyzes historical delivery patterns to predict delays before they happen" },
        { name: "Lessons Learned Harvester", desc: "Auto-captures project outcomes, decisions, and patterns for future reuse" }
      ],
      kpis: [
        { metric: "Plan Accuracy", before: "Degrades weekly", after: "Real-time accurate" },
        { metric: "Stakeholder Update Time", before: "3-5 hrs/week", after: "15 min review" },
        { metric: "On-Time Delivery Rate", before: "70%", after: "90%+" },
        { metric: "Knowledge Reuse", before: "Ad hoc", after: "Systematic" }
      ]
    },
    maturityPath: "Static plans → AI-assisted updates → Agent-driven project management → Autonomous delivery orchestration"
  },
  {
    id: "sa",
    title: "Solution Architect",
    abbrev: "SA",
    icon: "blocks",
    color: "emerald",
    currentState: {
      summary: "Designs technical solutions for customer environments, bridging business requirements with product capabilities and integration architectures.",
      painPoints: [
        "Recreating similar solution designs from scratch each time",
        "Keeping up with rapidly changing product capabilities",
        "Compatibility and integration validation is manual",
        "Design documentation takes weeks to complete"
      ]
    },
    factoryState: {
      newRole: "Solution Intelligence Architect",
      summary: "Leverages agents that accelerate solution design through pattern matching, auto-validation, intelligent documentation, and continuous product intelligence.",
      agents: [
        { name: "Solution Pattern Matcher", desc: "Matches customer requirements against proven design patterns and past successful implementations" },
        { name: "Compatibility Validator", desc: "Automatically validates solution designs against known compatibility matrices and constraints" },
        { name: "Design Doc Generator", desc: "Creates comprehensive solution documents from structured inputs and validated patterns" },
        { name: "Product Intelligence Feed", desc: "Continuously monitors product updates, EOL notices, and feature changes relevant to active designs" }
      ],
      kpis: [
        { metric: "Solution Design Time", before: "2-4 weeks", after: "2-3 days" },
        { metric: "Design Rework Rate", before: "30%", after: "< 10%" },
        { metric: "Pattern Reuse", before: "Informal", after: "80% from library" },
        { metric: "Product Knowledge Currency", before: "Quarterly refresh", after: "Real-time" }
      ]
    },
    maturityPath: "Manual design → AI-assisted validation → Agent-driven design generation → Autonomous solution engineering"
  },
  {
    id: "renewals",
    title: "Renewals Manager",
    abbrev: "RM",
    icon: "refresh-cw",
    color: "amber",
    currentState: {
      summary: "Manages the contract renewal pipeline, identifies expansion opportunities, and works to retain revenue across the customer base.",
      painPoints: [
        "Renewal pipeline is managed in spreadsheets with stale data",
        "Upsell/cross-sell opportunities identified by chance",
        "Quote generation is manual and error-prone",
        "Customer sentiment before renewal is a black box"
      ]
    },
    factoryState: {
      newRole: "Revenue Intelligence Manager",
      summary: "Orchestrates agents that maintain a live renewal pipeline, predict churn, identify expansion signals, and automate quote preparation with human-approved pricing.",
      agents: [
        { name: "Pipeline Pulse Agent", desc: "Maintains real-time renewal pipeline with auto-updated dates, values, and risk scores" },
        { name: "Expansion Signal Detector", desc: "Analyzes usage patterns, support interactions, and market signals to surface upsell opportunities" },
        { name: "Quote Accelerator", desc: "Auto-generates renewal and expansion quotes based on current contracts and pricing rules" },
        { name: "Sentiment Analyzer", desc: "Gauges customer sentiment from communications and interactions leading up to renewal" }
      ],
      kpis: [
        { metric: "Renewal Forecast Accuracy", before: "75%", after: "95%+" },
        { metric: "Upsell Pipeline Generated", before: "Manual sourcing", after: "Agent-identified" },
        { metric: "Quote Generation Time", before: "1-3 days", after: "Minutes" },
        { metric: "Retention Rate", before: "Baseline", after: "+5-10 pts" }
      ]
    },
    maturityPath: "Spreadsheet tracking → AI-assisted forecasting → Agent-driven pipeline management → Autonomous revenue operations"
  },
  {
    id: "adoption",
    title: "Adoption Specialist",
    abbrev: "AS",
    icon: "graduation-cap",
    color: "teal",
    currentState: {
      summary: "Drives product adoption by creating enablement content, running workshops, tracking feature utilization, and guiding customers through their adoption journey.",
      painPoints: [
        "Adoption plans are generic, not personalized to each customer",
        "Usage data analysis is manual and lagging",
        "Content creation for enablement takes significant time",
        "Hard to measure which interventions actually drive adoption"
      ]
    },
    factoryState: {
      newRole: "Adoption Intelligence Specialist",
      summary: "Designs agents that create personalized adoption journeys, monitor real-time usage, auto-generate enablement content, and measure intervention effectiveness.",
      agents: [
        { name: "Adoption Journey Builder", desc: "Creates personalized, stage-appropriate adoption plans based on customer profile, usage, and goals" },
        { name: "Usage Analytics Agent", desc: "Real-time monitoring of feature adoption with automatic gap identification and recommendations" },
        { name: "Enablement Content Generator", desc: "Auto-creates tutorials, guides, and tips tailored to customer's specific deployment and usage patterns" },
        { name: "Intervention Effectiveness Tracker", desc: "Measures which adoption activities drive real usage changes and recommends next best actions" }
      ],
      kpis: [
        { metric: "Adoption Plan Personalization", before: "Generic template", after: "AI-tailored per customer" },
        { metric: "Time to First Value", before: "Variable", after: "Reduced 50%+" },
        { metric: "Content Creation Time", before: "Days per asset", after: "Hours" },
        { metric: "Feature Adoption Rate", before: "Baseline", after: "+30-50%" }
      ]
    },
    maturityPath: "Generic playbooks → AI-assisted personalization → Agent-driven adoption journeys → Autonomous adoption orchestration"
  },
  {
    id: "support-eng",
    title: "Support Engineer",
    abbrev: "SE",
    icon: "wrench",
    color: "red",
    currentState: {
      summary: "Resolves technical support cases, diagnoses issues, applies fixes, and escalates complex problems — often under SLA pressure.",
      painPoints: [
        "Repetitive issues consume time that could go to complex problems",
        "Knowledge base searches are slow and often miss relevant articles",
        "Case context is lost during handoffs and escalations",
        "Root cause analysis is done from scratch each time"
      ]
    },
    factoryState: {
      newRole: "Support Intelligence Engineer",
      summary: "Builds and oversees agents that auto-resolve common issues, accelerate diagnosis, maintain case context across handoffs, and mine support data for systemic improvements.",
      agents: [
        { name: "Auto-Resolver", desc: "Handles known, documented issues end-to-end with validated fix procedures (with customer confirmation)" },
        { name: "Diagnostic Accelerator", desc: "Analyzes logs, configurations, and symptoms to suggest probable causes and resolution steps" },
        { name: "Context Keeper", desc: "Maintains full case narrative across handoffs — no customer ever has to repeat themselves" },
        { name: "Pattern Miner", desc: "Analyzes case trends to identify systemic issues, bug patterns, and documentation gaps" }
      ],
      kpis: [
        { metric: "First Contact Resolution", before: "40-50%", after: "70%+" },
        { metric: "Mean Time to Resolve", before: "Hours-Days", after: "Minutes-Hours" },
        { metric: "Escalation Rate", before: "30%+", after: "< 15%" },
        { metric: "Known Issue Auto-Resolution", before: "0%", after: "40%+" }
      ]
    },
    maturityPath: "Manual troubleshooting → AI-assisted diagnosis → Agent-driven resolution → Autonomous support operations"
  },
  {
    id: "cx-pm",
    title: "CX Program Manager",
    abbrev: "CX PM",
    icon: "layout-dashboard",
    color: "orange",
    currentState: {
      summary: "Drives cross-functional CX programs, aligns teams around customer outcomes, manages executive reporting, and ensures strategic initiatives deliver results.",
      painPoints: [
        "Program status is assembled manually from multiple sources",
        "Cross-team dependencies are tracked in the PM's head",
        "Executive reporting is a recurring time sink",
        "Impact measurement is lagging and approximate"
      ]
    },
    factoryState: {
      newRole: "AI Factory Program Lead",
      summary: "Manages the AI Factory itself — orchestrates the agent portfolio, tracks transformation KPIs, governs the agent lifecycle, and reports impact to executives automatically.",
      agents: [
        { name: "Program Pulse Dashboard", desc: "Real-time program status aggregated from all workstreams, tools, and team updates automatically" },
        { name: "Dependency Tracker", desc: "Maps and monitors cross-team dependencies with automatic risk flagging on blockers" },
        { name: "Executive Report Generator", desc: "Auto-compiles executive-ready program reports with KPIs, risks, and recommendations" },
        { name: "Impact Measurer", desc: "Continuously tracks cycle-time reductions, throughput gains, and ROI across the agent portfolio" }
      ],
      kpis: [
        { metric: "Program Status Compilation", before: "1-2 days/cycle", after: "Always current" },
        { metric: "Dependency Visibility", before: "Tribal knowledge", after: "Real-time mapped" },
        { metric: "Executive Report Time", before: "4-8 hours", after: "Auto-generated" },
        { metric: "Impact Measurement", before: "Quarterly estimates", after: "Continuous, precise" }
      ]
    },
    maturityPath: "Manual program tracking → AI-assisted reporting → Agent-driven program management → Autonomous portfolio orchestration"
  },
  {
    id: "cx-leader",
    title: "CX Leadership",
    abbrev: "CXL",
    icon: "crown",
    color: "yellow",
    currentState: {
      summary: "Sets CX strategy, manages P&L, drives organizational effectiveness, and ensures the CX org delivers measurable customer and business outcomes.",
      painPoints: [
        "Visibility into real-time org performance is limited",
        "Strategic decisions based on lagging indicators",
        "Scaling the team means scaling headcount linearly",
        "Innovation happens in pockets, not systematically"
      ]
    },
    factoryState: {
      newRole: "AI Factory Executive",
      summary: "Leads the AI Factory transformation — sets the vision for agent-powered CX, governs the portfolio, makes investment decisions based on real-time agent performance data, and scales impact exponentially.",
      agents: [
        { name: "Org Performance Dashboard", desc: "Real-time organizational KPIs across all CX functions, powered by agent and human performance data" },
        { name: "Strategic Signal Aggregator", desc: "Synthesizes customer sentiment, market trends, product signals, and internal metrics into strategic insights" },
        { name: "Investment Recommender", desc: "Analyzes agent ROI data to recommend where to invest next in the AI Factory portfolio" },
        { name: "Innovation Pipeline Monitor", desc: "Tracks agent ideas from identification through deployment, ensuring systematic innovation flow" }
      ],
      kpis: [
        { metric: "Decision Latency", before: "Weekly/Monthly cycles", after: "Real-time insights" },
        { metric: "Revenue per CX FTE", before: "Linear growth", after: "Exponential via agents" },
        { metric: "Innovation Throughput", before: "Ad hoc", after: "Systematic pipeline" },
        { metric: "Customer Outcome Velocity", before: "Quarterly measured", after: "Continuously tracked" }
      ]
    },
    maturityPath: "Intuition-driven → Data-assisted decisions → Agent-informed strategy → AI Factory-powered leadership"
  }
];

const ASSESSMENT_QUESTIONS = [
  {
    id: "q1",
    question: "How are repetitive tasks handled in your team today?",
    options: [
      { value: 1, label: "Entirely manual — people do everything by hand" },
      { value: 2, label: "Some AI tools used ad hoc (ChatGPT, Copilot, etc.)" },
      { value: 3, label: "Structured agents handle specific workflows with oversight" },
      { value: 4, label: "Agents run most workflows autonomously with governance" }
    ]
  },
  {
    id: "q2",
    question: "How does your team track and measure process performance?",
    options: [
      { value: 1, label: "We don't systematically measure cycle times" },
      { value: 2, label: "Some metrics tracked manually in spreadsheets" },
      { value: 3, label: "Dashboards track key metrics, some auto-updated" },
      { value: 4, label: "Real-time performance data drives continuous optimization" }
    ]
  },
  {
    id: "q3",
    question: "How does knowledge get shared and reused across your team?",
    options: [
      { value: 1, label: "Tribal knowledge — it lives in people's heads" },
      { value: 2, label: "Some documentation exists but it's often outdated" },
      { value: 3, label: "Knowledge base actively maintained and used by agents" },
      { value: 4, label: "Agents automatically capture, update, and surface knowledge" }
    ]
  },
  {
    id: "q4",
    question: "What's your team's comfort level with AI-assisted workflows?",
    options: [
      { value: 1, label: "Skeptical or unfamiliar — limited exposure" },
      { value: 2, label: "Curious and experimenting — some early adopters" },
      { value: 3, label: "Actively using AI in daily work with clear guidelines" },
      { value: 4, label: "AI-first mindset — team designs and builds agents" }
    ]
  },
  {
    id: "q5",
    question: "How are customer interactions and engagement managed?",
    options: [
      { value: 1, label: "Reactive — we respond when customers reach out" },
      { value: 2, label: "Some proactive outreach based on manual triggers" },
      { value: 3, label: "Agents surface signals and draft proactive actions" },
      { value: 4, label: "Agents orchestrate proactive engagement at scale" }
    ]
  },
  {
    id: "q6",
    question: "How does your organization approach process improvement?",
    options: [
      { value: 1, label: "Rarely — processes stay the same for long periods" },
      { value: 2, label: "Occasionally — improvements happen after pain is felt" },
      { value: 3, label: "Regularly — dedicated effort to identify and automate" },
      { value: 4, label: "Continuously — agent performance data drives ongoing optimization" }
    ]
  }
];
