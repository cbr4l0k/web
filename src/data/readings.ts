import readingsData from './readings.json';

export interface Quote {
    quote: string;
    note?: string;
}

export interface Reading {
    title: string;
    author: string;
    date: string;
    quotes: Quote[];
}

export const readings: Reading[] = readingsData;