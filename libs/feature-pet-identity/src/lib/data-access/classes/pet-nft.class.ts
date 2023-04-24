import { BaseContract, BigNumberish, Contract, ContractInterface, Signer, providers } from "ethers";
import { ContractsService } from "../services/contracts.service";

export class PetNftContractFactory {
    static async connect(
        petNftContractAddress: string,
        signerOrProvider: Signer | providers.Web3Provider | undefined,
        contractsService: ContractsService,
    ): Promise<PetNftContract> {
        const abi = await contractsService.getAbi(petNftContractAddress).toPromise();
        return new PetNftContract(petNftContractAddress, abi as ContractInterface, signerOrProvider);
    }
}

export class PetNftContract extends BaseContract {
    private _contract: Contract;
    private _petNftContractAddress: string;

    constructor(
        petNftContractAddress: string,
        abi: ContractInterface,
        signerOrProvider: Signer | providers.Web3Provider | undefined,
    ) {
        super(petNftContractAddress, abi, signerOrProvider);
        this._contract = new Contract(petNftContractAddress, abi, signerOrProvider);
        this._petNftContractAddress = petNftContractAddress;
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
}
