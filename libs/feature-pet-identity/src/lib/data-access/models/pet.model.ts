import { User } from "./user.model";

export interface Pet {
    uuid?: string;
    name: string;
    pedigreeName?: string;
    kennelName?: string;
    dob: Date;
    species: Species;
    breed: string;
    chipNumber: string;
    owner: User;
    photo?: string;
    color?: string;
    furType?: FurType;
    distinguishingMarks: string;
}

export type Species = 'dog' | 'cat';

export type FurType = 'short' | 'medium' | 'long';