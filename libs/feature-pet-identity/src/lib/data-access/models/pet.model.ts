import { User } from "./user.model";

export interface Pet {
    uuid?: string;
    name: string;
    dob: Date;
    species: Species;
    breed: string;
    chipNumber: string;
    owner: User;
    photo?: string;
    color?: string;
    distinguishingMarks: string;
}

export type Species = 'dog' | 'cat';