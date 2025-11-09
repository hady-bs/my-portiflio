export interface Skill {
  name: string;
  rank: string;
}

export interface Language {
  name: string;
  score: string;
}

export interface EducationItem {
  name: string;
  date: string;
  done: boolean;
}

export interface Project {
  img: string;
  name: string;
  languages: string[];
  description: string;
  link: string;
}
export interface experience {
  company: string;
  date: string;
  done: true;
  details: string[];
}
export default interface PortfolioData {
  record: {
    skills: Skill[];
    otherSkills: string[];
    languages: Language[];
    Education: EducationItem[];
    projects: Project[];
    experience: experience[];
  };
}
