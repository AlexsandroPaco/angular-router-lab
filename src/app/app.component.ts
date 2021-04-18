import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  
  constructor(
    private router: Router
  ) {}

  firt() {
    //this.router.navigateByUrl("/first-component");
    //this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
    // caminho estático
    this.router.navigate(['/first-component']);
  }

  second() {
    this.router.navigateByUrl("/second-component");
  }
}
