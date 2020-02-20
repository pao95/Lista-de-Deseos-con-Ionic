import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCompletosPipe } from './filtro-completos.pipe';



@NgModule({
  declarations: [FiltroCompletosPipe],
  exports: [
    FiltroCompletosPipe
  ]
})
export class PipesModule { }
