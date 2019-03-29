import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {

  nome;
  detalhes;

  constructor( private route:ActivatedRoute ) { 
   console.log("Executou o construtor")
  }

  ngOnInit() {
    let idcerveja = this.route.snapshot.params.id;
   
    if(idcerveja ==='50'){
     this.nome = "proibida"
     this.detalhes = "Tão gostosa que é proibida. A melhor cerveja do ceara"
    } else if (idcerveja ==='60'){
      this.nome = 'skol'
      this.detalhes = "A puro malte que desce redondo"
    }
  }

}
