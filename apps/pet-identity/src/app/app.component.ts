import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TopNavComponent } from "@pet-identity/shared";
import { TuiRootModule } from "@taiga-ui/core";

@Component({
  standalone: true,
  imports: [RouterModule, TuiRootModule, TopNavComponent],
  selector: "pet-identity-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "pet-identity";
}
