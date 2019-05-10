import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private router:Router){
    this.cervejas = []
  }

  cervejas;

  ngOnInit(){}

  Excluir(nome){
      localStorage.removeItem(nome)
      this.listar()
    }

    detalhes(nome){
      this.router.navigate(["/cerveja-detalhes",  nome])
    }

    listar(){
      this.cervejas = []

   const TamanhoDoBanco = localStorage.length
   for (let index = 0; index < TamanhoDoBanco; index++) {
    const chave = localStorage.key(index)     
    const cerveja = localStorage.getItem(chave)
    const cervejaReal = JSON.parse(cerveja)
    this.cervejas.push(cervejaReal)
   }



    }
  ionViewDidEnter(){
    this.listar()
  
  }

}
