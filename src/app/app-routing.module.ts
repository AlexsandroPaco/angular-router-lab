import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RotaComParametroComponent } from "./rota-com-parametro/rota-com-parametro.component";

const routes: Routes = [
  { path: "first-component", component: FirstComponent},
  { path: "second-component", component: SecondComponent},
  { path: "rota-com-param", component: RotaComParametroComponent }, // Para navegar com navigate não precisa especificar o parâmetro, caso haja, na rota.
  { path: "rota-com-param/:nome", component: RotaComParametroComponent }, // Para navegar com navigateByUrl é preciso especificar o parâmetro, caso haja, na rota.
  { path: "**", component: PageNotFoundComponent } // quando a rota informada não existir.
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
