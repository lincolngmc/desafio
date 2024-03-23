import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { NossoTimeComponent } from './nosso-time/nosso-time.component';
import { ProdutosComponent } from './produtos/produtos.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    NossoTimeComponent,
    ProdutosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectButtonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
