import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ContractInterface } from "ethers";
import { petProfileNFTAbi } from "../abis/petProfileNFT.abi";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { APP_CONFIG, AppConfig } from "@pet-identity/shared";
import { pieceIssuerNFTAbi } from "../abis/pieceIssuer.abi";

export interface ipfsResponse {
  IpfsHash: string;
  PinSize: number;
  Timestamp: Date;
}


@Injectable({
  providedIn: 'root'
})
export class ContractsService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private readonly appConfig: AppConfig ) {}

    getPetProfileNFTAbi(): Observable<ContractInterface> {
      return of(petProfileNFTAbi.contract.abi);
    }

    getPieceIssuerNFTAbi(): Observable<ContractInterface> {
      return of(pieceIssuerNFTAbi.contract.abi);
    }

    postMetadata(metadata: any): Observable<ipfsResponse> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: `Bearer ${this.appConfig.pinataJWT}`
        })
      };
      return this.http.post<ipfsResponse>('https://api.pinata.cloud/pinning/pinJSONToIPFS', metadata, httpOptions)
    }

    postImage(image: File): Observable<ipfsResponse> {
      const formData = new FormData();
      formData.append('file', image);
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.appConfig.pinataJWT}`
        })
      };
      return this.http.post<ipfsResponse>('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, httpOptions)
    }
}

