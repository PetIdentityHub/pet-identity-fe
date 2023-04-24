import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from "@pet-identity/shared";


@Injectable({
  providedIn: 'root'
})
export class ContractsService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private readonly appConfig: AppConfig) {}

    getAbi(contractId: string): Observable<any> {
        return this.http.get(`${this.appConfig.chainApiUrl}?module=contract&action=getabi&address=${contractId}`);
    }
}

