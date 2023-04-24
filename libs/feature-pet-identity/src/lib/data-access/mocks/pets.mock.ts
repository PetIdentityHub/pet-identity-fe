import { Pet } from "../models/pet.model";
import { usersMock } from "./users.mock";

export const petsMock: Pet[] = [

];

// Add pet references to the usersMock
usersMock[0].pets = [petsMock[0], petsMock[2], petsMock[4], petsMock[6]];
usersMock[1].pets = [petsMock[1], petsMock[3], petsMock[5], petsMock[7]];
