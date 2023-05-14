import { BaseContract, Contract, ContractInterface, Signer, providers } from "ethers";
import { ContractsService } from "../services/contracts.service";

export class PieceIssuerContractFactory {
    static async connect(
        proxyContractAddress: string,
        signerOrProvider: Signer | providers.Web3Provider | undefined,
        contractsService: ContractsService,
    ): Promise<PieceIssuerNftContract> {
        //TODO: toPromise() is deprecated
        const abi = await contractsService.getPetProfileNFTAbi().toPromise();
        return new PieceIssuerNftContract(proxyContractAddress, abi as ContractInterface, signerOrProvider);
    }
}

export class PieceIssuerNftContract extends BaseContract {
    private _contract: Contract;
    private _proxyContractAddress: string;

    constructor(
        proxyContractAddress: string,
        abi: ContractInterface,
        signerOrProvider: Signer | providers.Web3Provider | undefined,
    ) {
        super(proxyContractAddress, abi, signerOrProvider);
        this._contract = new Contract(proxyContractAddress, abi, signerOrProvider);
        this._proxyContractAddress = proxyContractAddress;
    }

    public applyAsIssuer(name: string, operator: string, metadataURI: string): Promise<any> {
        const data = {
            name: name,
            operator: operator,
            metadataURI: `ipfs://${metadataURI}/`
        }

        const sender = operator;
        return this._contract['applyAsIssuer'](sender, data);
    }

    public getApplication(applicant: string): Promise<any> {
        return this._contract['getApplication'](applicant);
    }
}