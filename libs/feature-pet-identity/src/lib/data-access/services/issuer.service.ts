import { Observable, from, map, of, switchMap, tap } from "rxjs";
import { Signer, providers } from 'ethers';
import { ContractsService } from "./contracts.service";
import { PieceIssuerNftContract } from "../classes/piece-issuer-nft.class";
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig, LoadingFacade } from "@pet-identity/shared";
import { IssuerApplication } from "../models/issuer-application";

@Injectable({
    providedIn: 'root'
})
export class IssuerService {
    private provider: providers.Web3Provider | null = null;
    private signer: Signer | null = null;

    constructor(
        private readonly contractsService: ContractsService,
        private readonly loadingFacade: LoadingFacade,
        @Inject(APP_CONFIG) private readonly appConfig: AppConfig
    ) {}

    private getSigner(): Signer | null {
        if (window.ethereum != null) {
            this.provider = new providers.Web3Provider(window.ethereum);
            this.signer = this.provider.getSigner();
            return this.signer;
        } else {
            return null;
        }
    }

    private getPieceIssuerNftContract(
        signerOrProvider: Signer | providers.Web3Provider | undefined
    ): Observable<PieceIssuerNftContract> {
        return this.contractsService
            .getPieceIssuerNFTAbi()
            .pipe(
                map(
                    (abi) =>
                        new PieceIssuerNftContract(
                            this.appConfig.pieceIssuerProxyContractAddress,
                            abi,
                            signerOrProvider
                        )
                )
            );
    }

    private getApplication(applicant: string, pieceIssuerNftContract: PieceIssuerNftContract): Observable<any> {
        return from(pieceIssuerNftContract.getApplication(applicant));
    }

    public getApplicationByApplicant(applicant: string): Observable<any> {
        this.loadingFacade.setLoading(true);
        const signer = this.getSigner();
        if (signer) {
            return this.getPieceIssuerNftContract(signer).pipe(
                switchMap((pieceIssuerNftContract) =>
                    this.getApplication(applicant, pieceIssuerNftContract)
                ),
                tap(() => this.loadingFacade.setLoading(false))
            )
        }
        else {
            this.loadingFacade.setLoading(false);
            return of({});
        }
    }

    public postIssuerApplication(metadata: IssuerApplication): Observable<any> {
        const signer = this.getSigner();
        if (signer) {
            console.log('signer');
            return this.getPieceIssuerNftContract(signer).pipe(
                switchMap((pieceIssuerNftContract) =>
                    this.contractsService.postMetadata(metadata).pipe(
                        switchMap((ipfsResposne) =>
                        pieceIssuerNftContract.applyAsIssuer(
                            metadata.requirements.name,
                            this.appConfig.operator,
                            ipfsResposne.IpfsHash))
                    )
                )
            )
        } else {
            return of({});
        }
    }
}