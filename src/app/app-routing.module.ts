import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";

const routes: Routes = [
  { path: "first-component", component: FirstComponent},
  { path: "second-component", component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
