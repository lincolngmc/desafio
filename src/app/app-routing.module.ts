import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NossoTimeComponent } from './nosso-time/nosso-time.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProjetoComponent } from './projeto/projeto.component';

const routes: Routes = [
  {path:'produtos', component:ProdutosComponent},
  {path:'projeto', component:ProjetoComponent},
  {path:'nosso-time', component:NossoTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
