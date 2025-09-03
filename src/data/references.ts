import referencesData from './references.json';

export interface Reference {
    title: string;
    description: string;
    reference: string;
    url?: string;
}

export const references: Reference[] = referencesData;

