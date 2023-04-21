import { User } from "../models/user.model";

export const usersMock: User[] = [
    {
      uuid: "u1a2b3c4d5",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "555-123-4567",
      address: "123 Main St",
      pets: [],
      socials: {
        facebook: "https://www.facebook.com/john.doe",
        instagram: "https://www.instagram.com/john.doe",
        twitter: "https://www.twitter.com/john.doe",
        telegram: "https://www.telegram.com/john.doe",
      }
    },
    {
      uuid: "u6f7g8h9i0",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "555-987-6543",
      address: "456 Elm St",
      pets: [],
      socials: {
        facebook: "https://www.facebook.com/jane.smith",
        twitter: "https://www.twitter.com/jane.smith",
      }
    },
  ];
  