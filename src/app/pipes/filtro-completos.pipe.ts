import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletos',
  pure: false
})
export class FiltroCompletosPipe implements PipeTransform {

  transform(listas: Lista [], completada: boolean = true): Lista [] {

      
    return listas.filter( data => {
      return data.terminada === completada; 
    });;
  }

}
