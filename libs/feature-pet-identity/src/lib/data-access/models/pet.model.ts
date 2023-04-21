import { User } from "./user.model";

export interface Pet {
    uuid: string;
    name: string;
    age: number; // in months
    species: Species;
    breed: string;
    chipNumber: string;
    owner: User;
    photo?: string;
    distinguishingMarks: string;
}

export type Species = 'dog' | 'cat';