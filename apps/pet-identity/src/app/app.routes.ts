import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    {
        path: "",
        loadChildren: () => import("@pet-identity/feature-pet-identity").then(m => m.HomeModule)
    },
    {
        path: "results",
        loadChildren: () => import("@pet-identity/feature-pet-identity").then(m => m.SearchResultsModule)
    },

];
