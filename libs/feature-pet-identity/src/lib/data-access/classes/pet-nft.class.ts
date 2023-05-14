import { BaseContract, BigNumberish, Contract, ContractInterface, Signer, providers } from "ethers";
import { ContractsService } from "../services/contracts.service";

export class PetNftContractFactory {
    static async connect(
        proxyContractAddress: string,
        signerOrProvider: Signer | providers.Web3Provider | undefined,
        contractsService: ContractsService,
    ): Promise<PetNftContract> {
        //TODO: toPromise() is deprecated
        const abi = await contractsService.getPetProfileNFTAbi().toPromise();
        return new PetNftContract(proxyContractAddress, abi as ContractInterface, signerOrProvider);
    }
}

export class PetNftContract extends BaseContract {
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

    public getProfileIdByChipId(chipId: string): Promise<any> {
        return this._contract['getProfileIdByChipId'](chipId);
    }

    public getProfileIdByName(name: string): Promise<any> {
        return this._contract['getProfileIdByName'](name);
    }

    public tokenURI(tokenId: BigNumberish): Promise<any> {
        return this._contract['tokenURI'](tokenId);
    }

    public createPetProfile(name: string, chipNumber: string, metadataURI: string): Promise<any> {
        return this._contract['createPetProfile']([name, chipNumber, `ipfs://${metadataURI}/`]);
    }
}
