import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
listas: Lista[];

@Input() terminada = true;
  constructor(private deseos: DeseosService, private route: Router) { 
    this.listas = this.deseos.listas;
  }

  ngOnInit() {}

  
  listaSeleccionada(lista: Lista){


    if(this.terminada){  this.route.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);}
    else{
      this.route.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  
  }

  borrarLista(item: Lista){
    this.deseos.borrarLista(item);
  }




}
