import { Pet } from "./pet.model";

export interface User {
    uuid: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    pets: Pet[];
    socials?: Socials;
}

export interface Socials {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    telegram?: string;
}