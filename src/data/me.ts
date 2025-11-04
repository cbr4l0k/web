import myData from './me.json';

export interface PersonalInfo {
  name: string;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface Welcome {
  title: string;
  content: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  start_date: string;
  end_date: string;
  highlights?: string[];
}

export interface ExperienceEntry {
  position: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  highlights?: string[];
}

export interface PublicationEntry {
  title: string;
  date: string;
  authors: string[];
  doi?: string;
}

export interface ProjectEntry {
  name: string;
  link?: string;
  date?: string;
  highlights?: string[];
}

export interface TechnologyEntry {
  category: string;
  items: string;
}

export interface CVData {
  personal_info: PersonalInfo;
  last_updated: string;
  welcome?: Welcome;
  education?: EducationEntry[];
  experience?: ExperienceEntry[];
  publications?: PublicationEntry[];
  projects?: ProjectEntry[];
  technologies?: TechnologyEntry[];
}

// Example usage with type safety:
export const cvData: CVData = myData;
