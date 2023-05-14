import { Inject, Injectable } from '@angular/core';
import { Observable, from, map, of, switchMap } from 'rxjs';
import { BigNumber, BigNumberish, Signer, providers } from 'ethers';
import { PetNftContract } from '../classes/pet-nft.class';
import { APP_CONFIG, AppConfig, LoadingFacade } from '@pet-identity/shared';
import { HttpClient } from '@angular/common/http';
import { ContractsService } from './contracts.service';
import { Pet } from '../models/pet.model';
import { petsMock } from '../mocks/pets.mock';

@Injectable({
    providedIn: 'root',
})
export class PetsService {
    private provider: providers.Web3Provider | null = null;
    private signer: Signer | null = null;
    private ipfsBaseUrl = 'https://ipfs.io/ipfs/';

    constructor(
        private httpClient: HttpClient,
        private contractsService: ContractsService,
        private loadingFacade: LoadingFacade,
        @Inject(APP_CONFIG) private readonly appConfig: AppConfig
    ) {}

    private getPetNftContract(
        signerOrProvider: Signer | providers.Web3Provider | undefined
    ): Observable<PetNftContract> {
        return this.contractsService
            .getPetProfileNFTAbi()
            .pipe(
                map(
                    (abi) =>
                        new PetNftContract(
                            this.appConfig.proxyContractAddress,
                            abi,
                            signerOrProvider
                        )
                )
            );
    }

    //TODO: move to shared service
    private getSigner(): Signer | null {
        if (window.ethereum != null) {
            this.provider = new providers.Web3Provider(window.ethereum);
            this.signer = this.provider.getSigner();
            return this.signer;
        } else {
            console.error('No provider');
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

    private getPetMetadata(cid: string): Observable<Pet> {
        return this.httpClient.get<Pet>(`${this.ipfsBaseUrl}${cid}`);
    }

    getPetMetadataByChipNumber(chipNumber: string): Observable<Pet> {
        this.loadingFacade.setLoading(true);
        const signer = this.getSigner();
        if (signer) {
            return this.getPetNftContract(signer).pipe(
                switchMap((petNftContract) =>
                    this.getByChipNumber(chipNumber, petNftContract).pipe(
                        switchMap((profileId) =>
                            this.getPetMetadataUrl(profileId, petNftContract)
                        ),
                        switchMap((ipfsurl) => {
                            const cid = ipfsurl
                                .split('ipfs://')[1]
                                .replace('/', '');
                            this.loadingFacade.setLoading(false);
                            return this.getPetMetadata(cid);
                        })
                    )
                )
            );
        } else {
            this.loadingFacade.setLoading(false);
            return of({} as Pet);
        }
    }

    getPetMetadataByName(name: string): Observable<Pet> {
        this.loadingFacade.setLoading(true);
        const signer = this.getSigner();
        if (signer) {
            return this.getPetNftContract(signer).pipe(
                switchMap((petNftContract) =>
                    this.getByName(name, petNftContract).pipe(
                        switchMap((profileId) =>
                            this.getPetMetadataUrl(profileId, petNftContract)
                        ),
                        switchMap((ipfsurl) => {
                            const cid = ipfsurl
                                .split('ipfs://')[1]
                                .replace('/', '');
                            this.loadingFacade.setLoading(false);
                            return this.getPetMetadata(cid);
                        })
                    )
                )
            );
        } else {
            this.loadingFacade.setLoading(false);
            return of({} as Pet);
        }
    }

    getMockPetMetadata(id: string): Observable<Pet | undefined> {
        return of(petsMock.find((pet) => pet.chipNumber === id));
    }

    postPet(metadata: Pet): Observable<any> {
        const signer = this.getSigner();
        if (signer) {
            return this.getPetNftContract(signer).pipe(
                switchMap((petNftContract) =>
                    this.contractsService.postMetadata(metadata).pipe(
                        switchMap((ipfsResponse) =>
                            petNftContract.createPetProfile(
                                metadata.name,
                                metadata.chipNumber,
                                ipfsResponse.IpfsHash
                            )
                        )
                    )
                )
            );
        } else {
            return of({});
        }
    }
}
