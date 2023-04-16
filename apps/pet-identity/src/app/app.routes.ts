import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    {
        path: "",
        loadChildren: () => import("@pet-identity/feature-pet-identity").then(m => m.HomeModule)
    },
    {
        path: "pets",
        loadChildren: () => import("@pet-identity/feature-pet-identity").then(m => m.SearchResultsModule)
    },

];
