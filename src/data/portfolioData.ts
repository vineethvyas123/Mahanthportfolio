import { Experience, SkillCategory, Certification, Award, DashboardMetric, PowerBIDashboardItem, AIUseCase, AIToolItem, AIPromptPlaygroundItem } from '../types';

export const personalInfo = {
  name: "Sai Mahanth Mada",
  title: "Scrum Master & Senior Software Developer",
  subtitle: "Specializing in Agile Transformation, Power BI Analytics, Cloud Data Engineering, Talend ETL & AI-Assisted Workflows",
  experienceYears: "7+",
  phone: "+91 8121791352",
  email: "saimahanth.mada@gmail.com",
  photoUrl: "https://res.cloudinary.com/dqghfdklb/image/upload/v1787198917/Mahanth_Professional_jpeg_hkn9yx.jpg",
  location: "Hyderabad, India",
  preferredLocations: ["Bangalore", "Hyderabad", "Remote / Hybrid"],
  dob: "16th March 1993",
  languages: ["English", "Telugu", "Hindi"],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Malla Reddy Engineering College, Hyderabad",
    year: "2015",
  },
  careerObjective: "Pursue challenging senior leadership roles in the IT sector, emphasizing high-impact expertise in Scrum Master, Power BI Developer, and AI-accelerated delivery positions, while aiming to contribute to innovative project outcomes, resilient teams, and organizational data excellence.",
  about: "Accomplished IT professional with over 7 years of expertise in Power BI Analytics, ETL Development, Agile frameworks, and intermediate Generative AI workflows—delivering sophisticated enterprise data solutions, driving digital transformation, and leveraging modern AI tooling (ChatGPT, Copilot, Prompt Engineering) to accelerate sprint ceremonies, DAX prototyping, and data engineering operations.",
  status: "Open for Opportunities",
  keyMetrics: [
    { label: "Years Experience", value: "7+" },
    { label: "Interactive Dashboards", value: "60+" },
    { label: "Sprint Delivery Success", value: "98%" },
    { label: "Data Redundancy Cut", value: "25%" },
    { label: "Enterprise Awards", value: "3" },
    { label: "Cloud & ETL Migrations", value: "100%" }
  ]
};

export const experiences: Experience[] = [
  {
    id: "harman-samsung",
    role: "Scrum Master & Senior Software Developer",
    company: "HARMAN Connected Services",
    parentCompany: "SAMSUNG",
    location: "Bangalore, India",
    period: "Since July 2023",
    startDate: "Jul 2023",
    endDate: "Present",
    current: true,
    project: "Camelot Illinois (Enterprise Gaming & Lottery)",
    client: "Camelot Illinois",
    awardWon: "Persona Award & B Brilliant Award",
    description: "Spearheading Agile Scrum orchestration and delivering high-value Power BI analytics and cloud data pipelines for enterprise lottery and gaming solutions.",
    keyResultAreas: [
      "Orchestrating all Scrum ceremonies (Sprint Planning, Daily Standups, Sprint Reviews, and Retrospectives), ensuring strict adherence to Agile frameworks to maximize productivity and continuous value delivery.",
      "Spearheading transformative Agile coaching for senior leadership and cross-functional engineering teams, cultivating a culture of team autonomy, psychological safety, and continuous delivery enhancement.",
      "Collaborating closely with Product Owners to refine backlogs and deploy Talend Jobs seamlessly, accelerating continuous integration and expanding core system capabilities.",
      "Acting as a servant leader by proactively eliminating technical and organizational impediments while mentoring teams on leveraging AWS cloud services for optimized data workflows.",
      "Identifying and resolving systemic delivery bottlenecks through strategic stakeholder engagement, boosting team flow and shortening product delivery cycle times.",
      "Partnering with Product Owners to strategically manage backlogs, ensuring crystal clarity in Sprint Goals and enabling consistent, high-value product increments.",
      "Providing advanced mentorship to fellow Scrum Masters and Product Owners, championing servant leadership principles and fostering an agile innovation mindset.",
      "Designing, developing, and maintaining interactive Power BI dashboards and executive reports to provide real-time business insights and support critical decision-making.",
      "Collaborating with key business stakeholders to translate multifaceted business requirements into responsive visual data stories.",
      "Optimizing dimensional data models and performing complex data transformations using Power Query and advanced DAX expressions for peak report speed and accuracy."
    ],
    highlights: [
      "Orchestrated critical Talend upgrade from version 7.3.1 to 8.0.1, managing developer coordination, deployment planning, and rigorous testing to ensure seamless migration with zero operational disruption.",
      "Pioneered AI-assisted Agile workflows utilizing Generative AI (ChatGPT & Microsoft Copilot) for automated INVEST user story drafting, acceptance criteria generation, and sprint risk registers—accelerating refinement cycle times by 35%.",
      "Enhanced team predictability and delivery excellence by integrating MoSCoW, Kano Model, and WSJF prioritization frameworks, boosting on-time Sprint Goal completion rates significantly.",
      "Utilized intermediate AI prompt engineering to accelerate DAX formula formulation and SQL query optimization, reducing report debugging cycles by 25%.",
      "Led innovative continuous improvement initiatives by implementing diverse Retrospective techniques, mitigating retrospective fatigue and increasing actionable sprint action item completion.",
      "Developed over 60 interactive Power BI dashboards, improving business data accessibility and leadership decision-making speed by 23%.",
      "Enhanced data accuracy and reporting efficiency, achieving a 15% reduction in data errors through optimized Power Query workflows.",
      "Created executive KPI dashboards enabling C-level management to track operational metrics, resulting in a 30% improvement in operational outcomes."
    ],
    metrics: [
      { label: "Decision Speed Boost", value: "+23%" },
      { label: "Story Drafting Speedup", value: "+35%" },
      { label: "Operational Improvement", value: "+30%" },
      { label: "Error Reduction", value: "-15%" },
      { label: "Talend Upgrade Downtime", value: "0 hrs" }
    ],
    skillsUsed: ["Scrum Master", "Agile Coaching", "Power BI", "DAX", "Generative AI Prompting", "Power Query", "Talend (v8.0.1)", "AWS S3 & Athena", "WSJF / MoSCoW", "Jira & Confluence"],
    technologies: ["Power BI Desktop", "DAX Measures", "ChatGPT / Copilot", "Power Query M", "Talend 8.0.1", "AWS S3", "AWS Athena", "Jira", "Confluence", "Oracle SQL"]
  },
  {
    id: "mphasis-charles-schwab",
    role: "Senior BIDW Developer",
    company: "Mphasis Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "April 2022 – May 2023",
    startDate: "Apr 2022",
    endDate: "May 2023",
    current: false,
    project: "Charles Schwab (Financial Services & Wealth Management)",
    client: "Charles Schwab",
    awardWon: "Laurel Award",
    description: "Spearheaded enterprise Big Data to Cloud Data Warehouse migration, architected optimized Power BI financial reporting, and engineered scalable ETL pipelines.",
    keyResultAreas: [
      "Spearheaded migration of numerous Talend Jobs from Big Data Hive to Cloud Data Warehouse for Charles Schwab, safeguarding historical data integrity while optimizing system query performance.",
      "Engineered sophisticated ETL mappings leveraging advanced Talend components such as tMap and BigQuery connectors, enhancing data transformation throughput across enterprise pipelines.",
      "Showcased cloud platform versatility through proficient utilization of Google Suite & Cloud components, managing data operations and integration in hybrid environments.",
      "Authored comprehensive test cases and executed rigorous data quality assurance and performance benchmark evaluations, guaranteeing accurate, rock-solid ETL processes.",
      "Designed and implemented bespoke interactive Power BI dashboards that translated complex financial datasets into intuitive insights for fast trend analysis.",
      "Seamlessly integrated Power BI with complementary data warehouse technologies, delivering cohesive, scalable solutions across multiple business units."
    ],
    highlights: [
      "Facilitated senior financial analysts by creating adaptive Power BI ad-hoc scenario models, reducing forecasting errors by 10% through enhanced analytical precision.",
      "Delivered incisive Power BI analytics, driving an 18% sales increase within one year through strategic visualization and actionable business insights.",
      "Accelerated development of dynamic Power BI dashboards and standardized reporting templates, reducing production time by 30% via workflow automation.",
      "Implemented sophisticated DAX calculated measures and time-intelligence in Power BI Desktop, enhancing overall report responsiveness and performance by 20%.",
      "Enhanced ETL efficiency by integrating optimized SQL data imports into Power BI, improving enterprise reporting consistency and data reliability.",
      "Architected and optimized multidimensional Power BI data models, achieving a 25% reduction in data redundancy while strengthening data governance.",
      "Transformed legacy static reporting frameworks into modern, interactive Power BI solutions, increasing operational efficiency by 15% and boosting stakeholder engagement.",
      "Conducted rigorous Power BI data validation exercises, bolstering analytical accuracy by 18% and safeguarding mission-critical intelligence.",
      "Designed optimized SQL extracts tailored specifically for high-volume Power BI dashboards, expediting report generation speed by 20%."
    ],
    metrics: [
      { label: "Sales Increase Driven", value: "+18%" },
      { label: "Production Time Cut", value: "-30%" },
      { label: "Data Redundancy Reduction", value: "-25%" },
      { label: "Report Speed Improvement", value: "+20%" }
    ],
    skillsUsed: ["Power BI", "DAX", "Big Data Hive", "Cloud Data Warehouse", "Talend ETL", "SQL Server", "BigQuery", "Data Modeling", "Financial Analytics"],
    technologies: ["Power BI", "DAX Time-Intelligence", "Big Data Hive", "Cloud Data Warehouse", "Talend DI", "SQL Server", "Google BigQuery", "SSAS"]
  },
  {
    id: "bts-healthcare-insurance",
    role: "ETL Application Developer",
    company: "Business Technology Solutions Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "April 2018 – April 2022",
    startDate: "Apr 2018",
    endDate: "Apr 2022",
    current: false,
    project: "Hope Hospitality Management & IDBI Federal Life Insurance",
    client: "Hope Hospitality & IDBI",
    description: "Built and managed high-volume ETL architectures, implemented Slowly Changing Dimensions (SCD), automated batch scheduling, and established resilient error tracking.",
    keyResultAreas: [
      "Engineered sophisticated ETL workflows using Talend to seamlessly integrate data from diverse heterogeneous sources including SQL Server, Oracle, & flat files into critical healthcare and insurance systems.",
      "Executed advanced business transformations and implemented comprehensive Slowly Changing Dimensions (SCD Types 1, 2, 3, 6), ensuring accurate historical data preservation and audit compliance.",
      "Optimized ETL performance through tuning tMap cache configurations, multi-threading, and parallel processing techniques, accelerating data pipeline throughput.",
      "Developed resilient error-management frameworks using tLogCatcher and tStatCatcher components, facilitating detailed logging and rapid resolution of data processing anomalies.",
      "Authored thorough design and technical documentation derived from functional specifications, guaranteeing precise communication and alignment with stakeholder requirements.",
      "Leveraged Talend's Context Variables, database connectors, and custom file components to build adaptable, scalable ETL solutions tailored to evolving enterprise needs.",
      "Implemented Incremental Loading strategies utilizing ETL Control Tables, optimizing data refresh cycles and minimizing system resource consumption.",
      "Administered Talend Administration Center (TAC) for efficient scheduling, execution, and 24/7 monitoring of ETL jobs, ensuring timely data delivery."
    ],
    highlights: [
      "Successfully preserved critical insurance policy historical records with SCD Types 1, 2, 3, and 6 implementation across millions of transactions.",
      "Drastically reduced ETL batch job execution times through parallel processing and memory buffer tuning in Talend.",
      "Built centralized automated error handling and notification system using tLogCatcher, cutting issue turnaround time by over 40%.",
      "Managed TAC scheduling for over 150+ daily automated data pipelines with 99.9% uptime."
    ],
    metrics: [
      { label: "Years at BTS", value: "4 Years" },
      { label: "Pipelines Managed", value: "150+" },
      { label: "Issue Resolution Speed", value: "+40%" },
      { label: "SCD Types Supported", value: "Types 1-6" }
    ],
    skillsUsed: ["Talend Data Integration", "Talend TAC", "SCD 1/2/3/6", "Oracle SQL", "SQL Server", "tLogCatcher", "Control-M", "Incremental Loading", "ETL Optimization"],
    technologies: ["Talend Data Integration (6.x-7.x)", "Talend TAC", "Oracle 12c", "SQL Server", "Control-M", "PL/SQL", "Linux Scripts"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Agile & Scrum Leadership",
    description: "Enterprise Agile facilitation, servant leadership, sprint lifecycle management, and team coaching",
    iconName: "Users",
    skills: [
      { name: "Scrum Ceremonies (Planning, Standups, Reviews, Retros)", level: 98, experience: "4+ yrs", highlight: true },
      { name: "Agile Coaching & Mentorship", level: 94, experience: "4+ yrs", highlight: true },
      { name: "Velocity, Burndown & Capacity Planning", level: 95, experience: "4+ yrs" },
      { name: "Jira & Confluence Administration", level: 92, experience: "5+ yrs" },
      { name: "Prioritization (MoSCoW, Kano Model, WSJF)", level: 93, experience: "4+ yrs", highlight: true },
      { name: "Conflict Resolution & Impediment Elimination", level: 96, experience: "4+ yrs" },
      { name: "Asana & Agile Project Tools", level: 90, experience: "4+ yrs" },
      { name: "Change Management & Retrospective Innovation", level: 92, experience: "4+ yrs" }
    ]
  },
  {
    category: "Power BI & Business Intelligence",
    description: "End-to-end business intelligence, dynamic interactive reporting, advanced DAX, and analytical modeling",
    iconName: "BarChart3",
    skills: [
      { name: "Microsoft Power BI Desktop & Service", level: 98, experience: "6+ yrs", highlight: true },
      { name: "Advanced DAX (Calculated Columns, Measures, Time-Intelligence)", level: 96, experience: "6+ yrs", highlight: true },
      { name: "Power Query (M Language & ETL Transformation)", level: 95, experience: "6+ yrs", highlight: true },
      { name: "Data Modeling (Star & Snowflake Schema Optimization)", level: 94, experience: "6+ yrs" },
      { name: "Interactive Dashboard & Drill-Through Design", level: 98, experience: "6+ yrs" },
      { name: "KPI Development & Metric Tracking", level: 95, experience: "6+ yrs" },
      { name: "Ad-hoc Scenario & Predictive Modeling", level: 90, experience: "5+ yrs" },
      { name: "Microsoft Excel (VBA, Power Pivot, Macros)", level: 92, experience: "7+ yrs" }
    ]
  },
  {
    category: "ETL & Data Engineering",
    description: "Enterprise data integration, automated pipeline pipelines, slowly changing dimensions, and job orchestration",
    iconName: "Database",
    skills: [
      { name: "Talend Data Integration (6.x, 7.x, 8.x)", level: 96, experience: "7+ yrs", highlight: true },
      { name: "Talend Administration Center (TAC)", level: 94, experience: "6+ yrs" },
      { name: "Slowly Changing Dimensions (SCD 1, 2, 3, 6)", level: 95, experience: "6+ yrs", highlight: true },
      { name: "tMap Tuning, Multi-threading & Parallelism", level: 92, experience: "6+ yrs" },
      { name: "Error Handling (tLogCatcher, tStatCatcher)", level: 93, experience: "6+ yrs" },
      { name: "Incremental Load Strategies & Control Tables", level: 94, experience: "6+ yrs" },
      { name: "Job Scheduling (Control-M, TAC)", level: 90, experience: "5+ yrs" },
      { name: "Talend Version Migration (7.x to 8.x)", level: 95, experience: "3+ yrs", highlight: true }
    ]
  },
  {
    category: "AI & Generative AI Tools",
    description: "Intermediate AI enablement, prompt engineering, AI-assisted sprint planning, automated DAX/SQL generation, and workflow automation",
    iconName: "Sparkles",
    skills: [
      { name: "Prompt Engineering & Few-Shot LLM Workflows", level: 88, experience: "2+ yrs", highlight: true },
      { name: "AI-Assisted Sprint Planning & User Story Generation", level: 92, experience: "2+ yrs", highlight: true },
      { name: "Automated DAX & SQL Query Generation (ChatGPT / Copilot)", level: 90, experience: "2+ yrs", highlight: true },
      { name: "Be10x Certified GenAI Suite (13+ AI Productivity Tools)", level: 94, experience: "2+ yrs", highlight: true },
      { name: "AI-Powered Documentation, Acceptance Criteria & Release Notes", level: 91, experience: "2+ yrs" },
      { name: "ETL Error Diagnosis & Code Refactoring with AI", level: 86, experience: "2+ yrs" },
      { name: "Natural Language Data Querying & Text-to-Insight", level: 85, experience: "2+ yrs" },
      { name: "AI Agents & Autonomous Task Automation", level: 82, experience: "1+ yrs" }
    ]
  },
  {
    category: "Cloud Platforms & Big Data",
    description: "Scalable cloud architectures, data warehousing, and cloud data processing",
    iconName: "Cloud",
    skills: [
      { name: "AWS Cloud (S3, EC2, Athena, Redshift, DynamoDB)", level: 90, experience: "4+ yrs", highlight: true },
      { name: "Google Cloud Platform (GCP / BigQuery)", level: 86, experience: "3+ yrs" },
      { name: "Big Data Hive & Cloud Warehouse Migration", level: 88, experience: "3+ yrs" },
      { name: "Cloud Data Pipelines & Storage Optimization", level: 89, experience: "4+ yrs" },
      { name: "AWS Data Engineering Foundations", level: 92, experience: "3+ yrs" },
      { name: "AI Tools & ChatGPT Workflow Acceleration (Be10x Certified)", level: 94, experience: "2+ yrs" }
    ]
  },
  {
    category: "Databases, SQL & Environments",
    description: "Complex relational queries, dimensional schemas, database tuning, and operating systems",
    iconName: "Server",
    skills: [
      { name: "Oracle SQL Developer & PL/SQL", level: 92, experience: "7+ yrs" },
      { name: "Microsoft SQL Server & SSMS", level: 94, experience: "7+ yrs", highlight: true },
      { name: "PostgreSQL & MySQL", level: 90, experience: "5+ yrs" },
      { name: "Teradata, SSAS & SSDT", level: 86, experience: "4+ yrs" },
      { name: "SQL Query Optimization & Performance Tuning", level: 93, experience: "7+ yrs" },
      { name: "Linux, UNIX & Windows Environments", level: 90, experience: "7+ yrs" }
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: "csm",
    name: "Certified Scrum Master (CSM)",
    issuer: "Scrum.org",
    year: "2023",
    credentialId: "CSM-984210",
    badgeType: "scrum",
    verified: true,
    description: "Globally recognized credential validating deep mastery in Scrum framework, sprint facilitation, continuous improvement, and servant leadership.",
    skillsCovered: ["Scrum Ceremonies", "Agile Coaching", "Servant Leadership", "Backlog Refinement", "Empirical Process Control"]
  },
  {
    id: "aws-data-eng",
    name: "AWS Data Engineer Foundations Certification",
    issuer: "Amazon Web Services (AWS)",
    year: "2022",
    credentialId: "AWS-DEF-4419",
    badgeType: "aws",
    verified: true,
    description: "Validates expertise in designing, building, and maintaining cloud data pipelines, Athena queries, S3 data lakes, and Redshift warehousing.",
    skillsCovered: ["AWS S3", "AWS Athena", "Amazon Redshift", "AWS Glue", "Cloud Data Pipelines"]
  },
  {
    id: "aws-cloud-practitioner",
    name: "Cloud Practitioner Certification (AWS)",
    issuer: "Amazon Web Services (AWS)",
    year: "2022",
    credentialId: "AWS-CP-7721",
    badgeType: "cloud",
    verified: true,
    description: "Demonstrates comprehensive understanding of AWS Cloud infrastructure, security, architecture, deployment, and compute services.",
    skillsCovered: ["EC2", "VPC & Security", "IAM", "Cloud Architecture", "Cost Optimization"]
  },
  {
    id: "aws-analytics",
    name: "Fundamentals of Analytics on AWS",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    credentialId: "AWS-AN-3108",
    badgeType: "aws",
    verified: true,
    description: "Focuses on big data analytics, querying large scale datasets, real-time analytics, and data integration with business intelligence tools.",
    skillsCovered: ["Big Data Analytics", "Data Warehousing", "EMR & Athena", "BI Integration", "Query Optimization"]
  },
  {
    id: "be10x-ai",
    name: "Certified AI Tools & Workflow Specialist (13+ AI Tools)",
    issuer: "Be10x",
    year: "2024",
    credentialId: "BE10X-AI-883",
    badgeType: "ai",
    verified: true,
    description: "Advanced certification covering ChatGPT, generative AI prompting, automated coding, data analysis with AI, and AI-accelerated Agile workflows.",
    skillsCovered: ["Prompt Engineering", "ChatGPT for Data Analysis", "AI-Powered Documentation", "Workflow Automation"]
  }
];

export const awards: Award[] = [
  {
    id: "persona-award",
    title: "Persona Award",
    organization: "HARMAN Connected Services (SAMSUNG)",
    project: "Camelot Illinois Agile Delivery",
    year: "2024",
    description: "Prestigious recognition awarded for outstanding servant leadership, cultural impact, and driving exemplary Agile adoption across engineering teams.",
    icon: "Award"
  },
  {
    id: "b-brilliant-award",
    title: "B Brilliant Award",
    organization: "HARMAN Connected Services (SAMSUNG)",
    project: "Zero-Downtime Talend 8.0 Upgrade",
    year: "2023",
    description: "Conferred for technical excellence, seamless execution of the zero-downtime Talend 8.0 upgrade, and high-impact Power BI executive dashboard design.",
    icon: "Sparkles"
  },
  {
    id: "laurel-award",
    title: "Laurel Award",
    organization: "Mphasis Pvt. Ltd.",
    project: "Charles Schwab Cloud Migration",
    year: "2022",
    description: "Awarded for exceptional contribution to the Charles Schwab cloud migration initiative and delivering analytics that drove an 18% sales increase.",
    icon: "Trophy"
  }
];

export const powerBIDashboards: PowerBIDashboardItem[] = [
  {
    id: "camelot-gaming",
    title: "Lottery & Gaming Revenue Executive Hub",
    enterprise: "Camelot Illinois",
    description: "Executive scorecard tracking daily ticket turnover, payout variance, retail terminal health, and geographic penetration across 12,000+ sales nodes.",
    daxMeasureName: "Sales YoY Growth %",
    daxCode: `Sales YoY Growth % = 
VAR CurrentPeriodSales = [Total Net Revenue]
VAR PriorYearSales = 
    CALCULATE(
        [Total Net Revenue],
        SAMEPERIODLASTYEAR('DimDate'[Date])
    )
RETURN 
    DIVIDE(
        CurrentPeriodSales - PriorYearSales,
        PriorYearSales,
        0
    )`,
    modelArchitecture: ["FactRevenue", "DimDate", "DimTerminal", "DimProduct", "DimGeography"],
    kpis: [
      { name: "Total Gross Turnover", value: "$42.8M", growth: "+14.2%" },
      { name: "Payout Ratio Index", value: "62.4%", growth: "-1.1%" },
      { name: "Terminal Uptime", value: "99.94%", growth: "+0.3%" },
      { name: "Retailer Velocity", value: "3.8k/hr", growth: "+8.7%" }
    ]
  },
  {
    id: "schwab-wealth",
    title: "Wealth Management & Scenario Modeling",
    enterprise: "Charles Schwab",
    description: "Financial performance suite analyzing asset inflows, portfolio churn, advisory fees, and predictive ad-hoc market fluctuation simulations.",
    daxMeasureName: "Cumulative AUM Rolling Avg",
    daxCode: `AUM Rolling 90D Avg = 
CALCULATE(
    AVERAGEX(
        DATESINPERIOD('DimDate'[Date], LASTDATE('DimDate'[Date]), -90, DAY),
        [Total AUM Balance]
    ),
    ALL('DimCustomer'[RiskTier])
)`,
    modelArchitecture: ["FactTransactions", "DimAccount", "DimAssetClass", "DimDate", "DimBranch"],
    kpis: [
      { name: "Net Assets Under Mgmt", value: "$184.2M", growth: "+18.0%" },
      { name: "Annual Advisory Fee", value: "$3.4M", growth: "+12.5%" },
      { name: "Client Retention Rate", value: "96.8%", growth: "+2.4%" },
      { name: "Forecasting Precision", value: "99.1%", growth: "+10.0%" }
    ]
  },
  {
    id: "idbi-insurance",
    title: "Policyholder Retention & SCD Claim Analytics",
    enterprise: "IDBI Federal & Hope Hospitality",
    description: "Insurance risk analytics monitoring policy lifecycle, SCD Type 2 claims history tracking, premium renewal velocity, and loss ratio thresholds.",
    daxMeasureName: "Active Policy Loss Ratio",
    daxCode: `Loss Ratio Index = 
DIVIDE(
    CALCULATE([Total Incurred Claims], 'DimClaimStatus'[Status] = "Approved"),
    [Total Earned Premium],
    0
)`,
    modelArchitecture: ["FactClaims", "FactPremiums", "DimPolicyHolder_SCD2", "DimDate", "DimProduct"],
    kpis: [
      { name: "Total Earned Premium", value: "$68.5M", growth: "+9.8%" },
      { name: "Loss Ratio Threshold", value: "54.2%", growth: "-4.5%" },
      { name: "Renewal Rate", value: "88.7%", growth: "+6.1%" },
      { name: "SCD Historic Accuracy", value: "100%", growth: "+0.0%" }
    ]
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "metric-1",
    title: "Sprint Delivery Predictability",
    metric: "98.4%",
    change: "+14.2% YoY",
    trend: "up",
    description: "Measured across 50+ enterprise sprints via WSJF & MoSCoW prioritization",
    category: "agile"
  },
  {
    id: "metric-2",
    title: "Talend Batch Throughput",
    metric: "4.2M rec/min",
    change: "+35% speedup",
    trend: "up",
    description: "Achieved through tMap cache tuning and multi-threaded parallel execution",
    category: "etl"
  },
  {
    id: "metric-3",
    title: "Power BI Query Latency",
    metric: "< 1.2s",
    change: "-45% response time",
    trend: "up",
    description: "Optimized via Star Schema indexing and advanced DAX measure refactoring",
    category: "bi"
  },
  {
    id: "metric-4",
    title: "Data Redundancy Reduction",
    metric: "-25%",
    change: "Optimized storage",
    trend: "up",
    description: "Consolidated enterprise semantic models across Charles Schwab datasets",
    category: "cloud"
  }
];

export const coreCompetenciesList = [
  "Sprint Planning & Execution",
  "Conflict Resolution & Negotiation",
  "Agile Coaching & Mentorship",
  "Velocity & Burndown Analysis",
  "Scrum Ceremonies Facilitation",
  "AI-Assisted Sprint Planning & User Stories",
  "Prompt Engineering & LLM Workflows",
  "Automated DAX & SQL Generation via AI",
  "Data Modeling & ETL Integration",
  "Interactive Dashboard Design",
  "KPI Development & Metrics Tracking",
  "Report Automation & Systematization",
  "Be10x GenAI Productivity Automation",
  "User Training & Support",
  "Scenario & Predictive Modeling",
  "Performance Tuning & Optimization",
  "Agile Transformation Strategies",
  "Data Governance Frameworks",
  "Stakeholder Engagement",
  "Change Management Principles",
  "Power Query & M Engine",
  "DAX Queries & Measures",
  "SQL Query Optimization",
  "Slowly Changing Dimensions (SCD)",
  "Talend Administration Center (TAC)",
  "AWS S3 & Cloud Warehousing"
];

export const aiUseCases: AIUseCase[] = [
  {
    id: "ai-agile-stories",
    title: "AI-Assisted INVEST Story & BDD Slicing",
    category: "agile",
    roleImpact: "Accelerating Sprint Backlog Grooming",
    description: "Transforms rough feature requests and business PRDs into granular, testable INVEST user stories complete with Gherkin Given-When-Then acceptance criteria and edge cases.",
    toolUsed: "ChatGPT (GPT-4o) & Microsoft Copilot",
    metricsGain: "+35% Refinement Velocity",
    keyWorkflows: [
      "Translates complex epic goals into vertically sliced, deliverable user stories",
      "Auto-generates comprehensive Gherkin syntax (Given / When / Then) acceptance tests",
      "Extracts technical constraints, API dependencies, and security edge cases upfront",
      "Builds sprint risk registers and definition of ready (DoR) compliance checklists"
    ]
  },
  {
    id: "ai-dax-copilot",
    title: "DAX & SQL Code Optimization Copilot",
    category: "bi",
    roleImpact: "Power BI Calculation & SQL Latency Tuning",
    description: "Employs contextual prompt engineering to formulate complex time-intelligence DAX expressions, analyze query execution plans, and refactor nested SQL subqueries into clean CTEs.",
    toolUsed: "Microsoft Copilot & ChatGPT Plus",
    metricsGain: "-25% Debugging Turnaround",
    keyWorkflows: [
      "Converts plain-English business analytics questions into optimized DAX measures",
      "Identifies row-context vs. filter-context pitfalls before report deployment",
      "Transforms expensive nested SQL queries into indexed common table expressions (CTEs)",
      "Generates mock tabular data for unit testing dimensional models"
    ]
  },
  {
    id: "ai-etl-diagnostics",
    title: "ETL Stack-Trace & Anomaly Diagnostics",
    category: "etl",
    roleImpact: "Talend Data Pipeline Reliability",
    description: "Feeds cryptic Java stack traces, Talend execution error logs, and regex patterns into LLMs for rapid root cause diagnosis and syntax correction.",
    toolUsed: "Claude 3.5 Sonnet & ChatGPT",
    metricsGain: "Zero-Downtime Migration Support",
    keyWorkflows: [
      "Rapidly isolates null-pointer, casting, and schema mismatch errors in tMap components",
      "Generates complex regular expressions for Talend tFilterRow and data validation rules",
      "Creates automated schema comparison scripts across Oracle and AWS Athena targets",
      "Translates legacy stored procedures into modernized Talend job logic"
    ]
  },
  {
    id: "ai-ceremony-synthesis",
    title: "Automated Release Notes & Sprint Synthesis",
    category: "productivity",
    roleImpact: "Stakeholder Transparency & Reporting",
    description: "Leverages Be10x certified prompt frameworks to synthesize Jira sprint commit logs into executive-ready release notes, burndown retrospectives, and presentation decks.",
    toolUsed: "Be10x GenAI Suite (13+ Tools)",
    metricsGain: "-50% Documentation Overhead",
    keyWorkflows: [
      "Compiles multi-team sprint retrospectives into prioritized, actionable themes",
      "Generates polished stakeholder newsletters summarizing delivered business value",
      "Transforms raw telemetry and velocity logs into visual executive briefings",
      "Automates agenda preparation and timeboxed discussion prompts for sprint events"
    ]
  }
];

export const aiToolStack: AIToolItem[] = [
  {
    id: "chatgpt",
    name: "ChatGPT (GPT-4o)",
    category: "LLM & Reasoning Engine",
    badge: "Daily Driver",
    useCase: "Sprint story decomposition, technical documentation, DAX formulation & complex problem solving",
    proficiency: 95,
    highlight: "Expert Few-Shot & Chain-of-Thought Prompting"
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    category: "Enterprise Ecosystem",
    badge: "M365 & Power BI",
    useCase: "Seamless Power BI formula assistance, Excel modeling, and enterprise meeting summarization",
    proficiency: 92,
    highlight: "Fabric & Office Suite Integration"
  },
  {
    id: "claude",
    name: "Claude 3.5 Sonnet",
    category: "Code & Logic Synthesis",
    badge: "Architecture & ETL",
    useCase: "Deep code analysis, complex regex crafting, SQL optimization, and Talend log debugging",
    proficiency: 90,
    highlight: "Large Context Window Architecture"
  },
  {
    id: "perplexity",
    name: "Perplexity Pro",
    category: "Grounded Research",
    badge: "Technical Discovery",
    useCase: "Fast library discovery, AWS service comparison, and live tech documentation retrieval",
    proficiency: 88,
    highlight: "Real-time Citation Grounding"
  },
  {
    id: "cursor-ai",
    name: "Cursor / AI Coding",
    category: "Developer Acceleration",
    badge: "Code Productivity",
    useCase: "Refactoring scripts, generating unit tests, and automating boilerplate ETL validation code",
    proficiency: 85,
    highlight: "Contextual Codebase Indexing"
  },
  {
    id: "genai-productivity",
    name: "Be10x GenAI Suite",
    category: "Workflow Automation",
    badge: "Certified (13+ Tools)",
    useCase: "Presentation deck synthesis, AI voice transcription, video summaries, and task automation",
    proficiency: 94,
    highlight: "Be10x Certified Specialist"
  }
];

export const aiPromptPlaygroundItems: AIPromptPlaygroundItem[] = [
  {
    id: "playground-story-slice",
    title: "INVEST Story Slicer & BDD Generator",
    domain: "Agile Scrum Management",
    icon: "ShieldCheck",
    inputDescription: "Raw requirement provided by business stakeholder:",
    inputCodeOrPrompt: `"We need our lottery terminal managers to view weekly sales anomalies and get flagged when retailer payouts exceed 70% threshold so they can investigate fraud or system glitches."`,
    systemPrompt: `You are an elite Agile Scrum Master. Transform the provided feature idea into an INVEST-compliant User Story with Gherkin Acceptance Criteria, Technical Subtasks, and Risk Mitigations.`,
    aiOutputTitle: "Generated Sprint Backlog Item (Jira Ready)",
    aiOutputContent: `### Story: US-402 - Retailer Payout Threshold Anomaly Alerting
**As a** Regional Lottery Terminal Operations Manager,
**I want to** be automatically alerted when a retail terminal's weekly payout ratio exceeds 70%,
**So that** I can promptly flag potential fraudulent payout spikes or hardware glitch discrepancies.

---
#### 📋 Acceptance Criteria (BDD / Gherkin):
\`\`\`gherkin
Scenario: Weekly payout exceeds 70% threshold
  Given a terminal's 7-day trailing Gross Sales = $10,000 and Total Payouts = $7,200 (72%)
  When the weekly automated Power BI data refresh executes
  Then the terminal status is flagged as "HIGH_RISK_PAYOUT_VARIANCE"
  And an alert is routed to the Regional Manager's Exception Dashboard.

Scenario: Weekly payout remains within normal limits (<= 70%)
  Given a terminal's payout ratio is 63%
  When the weekly batch runs
  Then the terminal status remains "HEALTHY" with standard telemetry logging.
\`\`\`

---
#### 🛠️ Technical Subtasks:
1. [Backend/Talend]: Add calculated column \`Payout_Ratio = Total_Payout / Gross_Turnover\` in \`FactTerminalDaily\`.
2. [Power BI/DAX]: Build measure \`[Terminal Risk Score]\` with conditional color formatting.
3. [QA/Validation]: Verify boundary condition at exactly 70.00% payout ratio.`,
    efficiencyGain: "Generated in 4 seconds vs. 25 minutes manual drafting"
  },
  {
    id: "playground-dax-optimizer",
    title: "DAX Time-Intelligence & Latency Refactoring",
    domain: "Power BI Engineering",
    icon: "BarChart3",
    inputDescription: "Sub-optimal DAX measure causing slow visual rendering (>4.5s):",
    inputCodeOrPrompt: `// Slow unoptimized calculation causing high engine memory consumption
Customer Churn Amount = 
SUMX(
    DimCustomer,
    IF(
        CALCULATE(COUNTROWS(FactTransactions), DATESBETWEEN(DimDate[Date], TODAY()-90, TODAY())) == 0,
        [Total Historical Value],
        0
    )
)`,
    systemPrompt: `You are a Principal Power BI Architect. Optimize the given DAX measure to eliminate row-by-row iteration (SUMX), leverage VertiPaq column storage, and achieve sub-second execution latency.`,
    aiOutputTitle: "Optimized High-Speed DAX Measure",
    aiOutputContent: `\`\`\`dax
// Optimized Measure: Eliminates iterative SUMX over high-cardinality customer table
// Execution speed: Reduced from 4.8s -> 0.3s (16x faster VertiPaq scan)
Customer Churn Amount (Optimized) = 
VAR InactiveWindowStart = TODAY() - 90
VAR ActiveCustomerKeys = 
    CALCULATETABLE(
        VALUES(FactTransactions[CustomerKey]),
        DimDate[Date] >= InactiveWindowStart,
        DimDate[Date] <= TODAY()
    )
RETURN
    CALCULATE(
        [Total Historical Value],
        NOT(DimCustomer[CustomerKey] IN ActiveCustomerKeys)
    )
\`\`\`

---
#### 🚀 Architectural Improvements:
- **Replaced nested SUMX with vectorized set operations** using \`CALCULATETABLE\` and \`VALUES\`.
- **Eliminated per-row context transition**, allowing the VertiPaq engine to compute active customers in a single batch scan.
- **Memory footprint reduced by 74%** on datasets with >1M customer rows.`,
    efficiencyGain: "16x faster visual rendering (0.3s vs 4.8s)"
  },
  {
    id: "playground-etl-anomaly",
    title: "Talend Error Log Anomaly Diagnostics",
    domain: "Talend ETL & AWS Integration",
    icon: "Cpu",
    inputDescription: "Cryptic Talend Java runtime exception during night batch:",
    inputCodeOrPrompt: `[FATAL]: org.talend.camelot.job_DimPolicyHolder - java.lang.NullPointerException: Cannot invoke "java.sql.Timestamp.getTime()" because "input_row.LAST_UPDATE_TS" is null
	at local_project.job_dimpolicyholder_scd2_0_1.job_DimPolicyHolder_SCD2.tDBInput_1Process(job_DimPolicyHolder_SCD2.java:4821)
	at local_project.job_dimpolicyholder_scd2_0_1.job_DimPolicyHolder_SCD2.runJobInTOS(job_DimPolicyHolder_SCD2.java:8912)`,
    systemPrompt: `You are a Senior Data Engineer. Analyze the Talend ETL stack trace, identify the exact root cause, provide the tMap expression fix with null-safety, and prevent SCD Type-2 pipeline crashes.`,
    aiOutputTitle: "Root Cause Diagnosis & Production Fix",
    aiOutputContent: `### 🔍 Root Cause Analysis:
During the SCD Type 2 dimension merge, \`input_row.LAST_UPDATE_TS\` encountered newly ingested records from upstream source where the timestamp was \`NULL\`. The native Java date conversion in \`tMap\` invoked \`.getTime()\` on an uninitialized timestamp object, triggering a fatal NullPointerException.

---
### 🛠️ Immediate Fix in \`tMap\` Expression:
\`\`\`java
// Replace direct mapping with defensive null-safe ternary evaluation:
input_row.LAST_UPDATE_TS != null 
    ? input_row.LAST_UPDATE_TS 
    : TalendDate.getCurrentDate()
\`\`\`

---
### 🛡️ Permanent Pipeline Hardening:
1. **Source Schema Constraint**: Add \`COALESCE(LAST_UPDATE_TS, CURRENT_TIMESTAMP)\` in the \`tDBInput_1\` SQL query.
2. **SCD Type 2 Fallback**: Set the default \`START_DATE\` to record creation timestamp if update timestamp is absent.
3. **Reject Flow**: Divert corrupt payload rows to \`tFileOutputDelimited_Rejects\` without terminating the entire batch job.`,
    efficiencyGain: "Identified & resolved in under 2 minutes"
  }
];
