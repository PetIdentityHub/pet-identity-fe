export interface IssuerApplication {
    country: string;
    type: IssuerApplicationType;
    requirements: {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    licenseNumber?: string;
    website?: string;
    };
}

export type IssuerApplicationType = 'vet' | 'contestOrganizer' | 'breeder';