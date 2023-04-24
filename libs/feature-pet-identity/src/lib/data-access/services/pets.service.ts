import { Inject, Injectable } from '@angular/core';
import { Observable, from, of, switchMap } from 'rxjs';
import { BigNumber, BigNumberish, Signer, providers } from 'ethers';
import {
    PetNftContract,
    PetNftContractFactory,
} from '../classes/pet-nft.class';
import { APP_CONFIG, AppConfig } from '@pet-identity/shared';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class PetsService {
    private provider: providers.Web3Provider | null = null;
    private signer: Signer | null = null;
    private ipfsBaseUrl = 'https://ipfs.io/ipfs/';

    constructor(
        private httpClient: HttpClient,
        @Inject(APP_CONFIG) private readonly appConfig: AppConfig
    ) {}

    private getSigner(): Signer | null {
        if (window.ethereum != null) {
            this.provider = new providers.Web3Provider(window.ethereum);
            this.signer = this.provider.getSigner();
            return this.signer;
        } else {
            console.log('No provider');
            return null;
        }
    }

    private getByChipNumber(
        chipNumber: string,
        petNftContract: PetNftContract
    ): Observable<BigNumber> {
        return from(petNftContract.getProfileIdByChipId(chipNumber));
    }

    private getByName(
        name: string,
        petNftContract: PetNftContract
    ): Observable<BigNumber> {
        return from(petNftContract.getProfileIdByName(name));
    }

    private getPetMetadataUrl(
        profileId: BigNumberish,
        petNftContract: PetNftContract
    ): Observable<string> {
        return from(petNftContract.tokenURI(profileId));
    }

    private getPetMetadata(cid: string): Observable<any> {
        return this.httpClient.get<any>(`${this.ipfsBaseUrl}${cid}`);
    }

    getPetMetadataByChipNumber(chipNumber: string): Observable<any> {
        const signer = this.getSigner();
        if (signer) {
            const petNftContract = PetNftContractFactory.connect(
                this.appConfig.petNftContractAddress,
                signer
            );
            return this.getByChipNumber(chipNumber, petNftContract).pipe(
                switchMap((profileId) =>
                    this.getPetMetadataUrl(profileId, petNftContract)
                ),
                switchMap((ipfsurl) => {
                    let cid = ipfsurl.split('ipfs://')[1].replace('/', '');
                    return this.getPetMetadata(cid);
                })
            );
        } else {
            return of(null);
        }
    }

    getPetMetadataByName(name: string): Observable<any> {
        const signer = this.getSigner();
        if (signer) {
            const petNftContract = PetNftContractFactory.connect(
                this.appConfig.petNftContractAddress,
                signer
            );
            return this.getByName(name, petNftContract).pipe(
                switchMap((profileId) =>
                    this.getPetMetadataUrl(profileId, petNftContract)
                ),
                switchMap((ipfsurl) => {
                    let cid = ipfsurl.split('ipfs://')[1].replace('/', '');
                    return this.getPetMetadata(cid);
                })
            );
        } else {
            return of(null);
        }
    }
}
