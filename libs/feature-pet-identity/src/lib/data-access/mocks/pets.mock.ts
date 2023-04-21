import { Pet } from "../models/pet.model";
import { usersMock } from "./users.mock";

export const petsMock: Pet[] = [
  {
    uuid: "1a2b3c4d5e",
    name: "Buddy",
    age: 36,
    species: "dog",
    breed: "Golden Retriever",
    chipNumber: "1234567890",
    owner: usersMock[0],
    distinguishingMarks: "White patch on chest",
  },
  {
    uuid: "6f7g8h9i0j",
    name: "Luna",
    age: 24,
    species: "cat",
    breed: "Maine Coon",
    chipNumber: "2345678901",
    owner: usersMock[1],
    photo: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/329215631_584845206449356_7565730378762258896_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=hpKD4oxapOMAX_31QVP&_nc_ht=scontent-fra5-1.xx&oh=00_AfBJFfNUwwIVaJSWpnBbYtTWMz8-CVrCrbAs9wfnYOyW8w&oe=64464CF8",
    distinguishingMarks: "Extra fluffy tail",
  },
  {
    uuid: "3a4b5c6d7e",
    name: "Charlie",
    age: 60,
    species: "dog",
    breed: "German Shepherd",
    chipNumber: "5678901234",
    owner: usersMock[0],
    photo: "charlie_photo.jpg",
    distinguishingMarks: "Black patch on right eye",
  },
  {
    uuid: "8f9g0h1i2j",
    name: "Lucy",
    age: 18,
    species: "cat",
    breed: "Bengal",
    chipNumber: "6789012345",
    owner: usersMock[1],
    photo: "lucy_photo.jpg",
    distinguishingMarks: "Marbled coat pattern",
  },
  {
    uuid: "4a5b6c7d8e",
    name: "Cooper",
    age: 32,
    species: "dog",
    breed: "Beagle",
    chipNumber: "7890123456",
    owner: usersMock[0],
    photo: "cooper_photo.jpg",
    distinguishingMarks: "White-tipped tail",
  },
  {
    uuid: "9f0g1h2i3j",
    name: "Chloe",
    age: 15,
    species: "cat",
    breed: "Sphynx",
    chipNumber: "8901234567",
    owner: usersMock[1],
    photo: "chloe_photo.jpg",
    distinguishingMarks: "Hairless",
  },
  {
    uuid: "5a6b7c8d9e",
    name: "Rocky",
    age: 40,
    species: "dog",
    breed: "Boxer",
    chipNumber: "9012345678",
    owner: usersMock[0],
    photo: "rocky_photo.jpg",
    distinguishingMarks: "Brindle coat",
  },
  {
    uuid: "0f1g2h3i4j",
    name: "Milo",
    age: 9,
    species: "cat",
    breed: "Persian",
    chipNumber: "0123456789",
    owner: usersMock[1],
    photo: "milo_photo.jpg",
    distinguishingMarks: "Fluffy and flat face",
  },
];

// Add pet references to the usersMock
usersMock[0].pets = [petsMock[0], petsMock[2], petsMock[4], petsMock[6]];
usersMock[1].pets = [petsMock[1], petsMock[3], petsMock[5], petsMock[7]];