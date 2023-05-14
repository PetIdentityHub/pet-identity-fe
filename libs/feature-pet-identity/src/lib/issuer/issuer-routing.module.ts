import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IssuerApplicationComponent } from "./pages/add-issuer/add-issuer.component";
import { LoginGuard } from "@pet-identity/shared";

const routes: Routes = [
    {
        path: 'apply',
        component: IssuerApplicationComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IssuerRoutingModule { }