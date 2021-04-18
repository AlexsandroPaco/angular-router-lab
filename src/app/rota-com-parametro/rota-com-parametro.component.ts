import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-rota-com-parametro',
  templateUrl: './rota-com-parametro.component.html',
  styleUrls: ['./rota-com-parametro.component.css']
})
export class RotaComParametroComponent implements OnInit {

  nome: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // quando o parâmetro é passado usando navigateByUrl
    this.route.queryParams.subscribe(params=> {
      console.log(params)
      this.nome = params["nome"];
    });

    // quando o parâmetro é passado usando navigate
    this.route.paramMap.subscribe( params => {
      console.log(params)
      console.log(params.get('nome'))
      this.nome = params.get('nome')
    })

  }

}