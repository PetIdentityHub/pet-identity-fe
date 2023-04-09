import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent, TopNavComponent } from "@pet-identity/shared";
import { TuiRootModule } from "@taiga-ui/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TuiRootModule, TopNavComponent, FooterComponent],
  selector: "pet-identity-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "pet-identity";
}
