import referencesData from './references.json';

export interface Category {
    id: number;
    label: string;
}

export interface Reference {
    title: string;
    description: string;
    reference: string;
    url?: string;
    category: number;
}

export const categories: Category[] = referencesData.categories;
export const references: Reference[] = referencesData.references;
