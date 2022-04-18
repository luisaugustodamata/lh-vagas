import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MuralDeVagasComponent } from '../mural-de-vagas/mural-de-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';

const rotas: Routes = [
  {path: 'mural', component: MuralDeVagasComponent},
  {path: 'painel', component: PainelVagasComponent},
  {path: '', redirectTo: '/mural', pathMatch:'full'}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
