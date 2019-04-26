import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(){
    this.cervejas = []
  }

  cervejas;

  ngOnInit(){}

  Excluir(nome){
      localStorage.removeItem(nome)
    }
  ionViewDidEnter(){
    this.cervejas = []

   const TamanhoDoBanco = localStorage.length
   for (let index = 0; index < TamanhoDoBanco; index++) {
    const chave = localStorage.key(index)     
    const cerveja = localStorage.getItem(chave)
    const cervejaReal = JSON.parse(cerveja)
   }
  
  }

}
