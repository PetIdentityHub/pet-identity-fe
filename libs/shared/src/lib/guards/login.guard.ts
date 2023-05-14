import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";

import * as WalletSelectors from "@pet-identity/feature-pet-identity";

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
    //TODO: CanActivate deprecated. Move to fn
    constructor(
        private readonly walletFacade: WalletSelectors.WalletFacade,
        private readonly router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.walletFacade.connected$.pipe(
            take(1),
            map(connected => {
                if (connected) {
                    return true;
                } else {
                    return this.router.createUrlTree(['/']);
                }
            })
        );
    }
}