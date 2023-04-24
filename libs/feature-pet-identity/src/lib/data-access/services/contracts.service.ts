import { Inject, Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from "@pet-identity/shared";
import { ContractInterface } from "ethers";


@Injectable({
  providedIn: 'root'
})
export class ContractsService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private readonly appConfig: AppConfig) {}

    getAbi(contractId: string): Observable<ContractInterface> {
      return this.http.get<{result: string}>(`${this.appConfig.chainApiUrl}?module=contract&action=getabi&address=${contractId}`).pipe(
          map(response => JSON.parse(response.result))
      );
  }
    
}

