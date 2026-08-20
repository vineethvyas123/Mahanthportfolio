export interface Experience {
  id: string;
  role: string;
  company: string;
  parentCompany?: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  project: string;
  client?: string;
  description: string;
  awardWon?: string;
  keyResultAreas: string[];
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  skillsUsed: string[];
  technologies?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  credentialId?: string;
  badgeType: 'scrum' | 'aws' | 'ai' | 'cloud';
  verified: boolean;
  description: string;
  skillsCovered: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  project?: string;
  description: string;
  icon: string;
  year?: string;
}

export interface DashboardMetric {
  id: string;
  title: string;
  metric: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  description: string;
  category: 'agile' | 'bi' | 'etl' | 'cloud';
}

export interface PowerBIDashboardItem {
  id: string;
  title: string;
  enterprise: string;
  description: string;
  daxMeasureName: string;
  daxCode: string;
  modelArchitecture: string[];
  kpis: {
    name: string;
    value: string;
    growth: string;
  }[];
}

export interface AIUseCase {
  id: string;
  title: string;
  category: 'agile' | 'bi' | 'etl' | 'productivity';
  roleImpact: string;
  description: string;
  toolUsed: string;
  metricsGain: string;
  keyWorkflows: string[];
  promptExample?: string;
  outputExample?: string;
}

export interface AIToolItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  useCase: string;
  proficiency: number;
  highlight: string;
}

export interface AIPromptPlaygroundItem {
  id: string;
  title: string;
  domain: string;
  icon: string;
  inputDescription: string;
  inputCodeOrPrompt: string;
  systemPrompt: string;
  aiOutputTitle: string;
  aiOutputContent: string;
  efficiencyGain: string;
}
