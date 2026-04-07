import referencesData from './references.json';

export interface Reference {
    title: string;
    description: string;
    reference: string;
    url?: string;
    category: string;
}

export const references: Reference[] = referencesData;
