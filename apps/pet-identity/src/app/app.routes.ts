import { Route } from "@angular/router";
import { LoginGuard } from "@pet-identity/shared";

export const appRoutes: Route[] = [
    {
        path: "",
        loadChildren: () => import("@pet-identity/feature-pet-identity").then(m => m.HomeModule)
    },
    {
        path: "pets",
        loadChildren: () => import("@pet-identity/feature-pet-identity").then(m => m.PetModule)
    },
    {
        path: "about",
        loadChildren: () => import("@pet-identity/feature-pet-identity").then(m => m.AboutModule)
    },
    {
        path: "issuer",
        canActivate: [LoginGuard],
        loadChildren: () => import("@pet-identity/feature-pet-identity").then(m => m.IssuerModule)
    }
];
