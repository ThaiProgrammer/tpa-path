import rawSkills from './skillsData.json';

export interface SkillDefinition {
  id: string;
  title: string;
  badge?: string;
  category: string;
  description: string;
  pathLink: string;
  tags: string[];
  content: string;
}

export const skillsData: Record<string, SkillDefinition> = rawSkills as Record<string, SkillDefinition>;
