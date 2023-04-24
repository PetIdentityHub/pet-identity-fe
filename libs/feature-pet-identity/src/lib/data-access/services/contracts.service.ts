import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ContractInterface } from "ethers";
import { petProfileNFTAbi } from "../abis/petProfileNFT.abi";


@Injectable({
  providedIn: 'root'
})
export class ContractsService {

    constructor() {}

    getPetProfileNFTAbi(): Observable<ContractInterface> {
      return of(petProfileNFTAbi.contract.abi);
    }
    
}

