import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-cerveja',
  templateUrl: './add-cerveja.page.html',
  styleUrls: ['./add-cerveja.page.scss'],
})
export class AddCervejaPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
    this.mensagem = ""
  }

  mensagem;

  salvar(form) {
    const cervejaString = JSON.stringify(form.value)
    const nomeCerveja = form.value.nome

    localStorage.setItem(nomeCerveja, cervejaString)



    form.reset()

    
    this.nav.back()
  }

}
