import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../servicos/services.service';

export interface Produtos{
    albumId:number,
    id: number,
    title:string,
    url:string,
    thumbnailUrl:string
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  categorias = [
    {nome: 'Português', valor: 1},
    {nome: 'Ciências', valor: 2},
    {nome: 'Matemática', valor: 3},
    {nome: 'Física', valor: 4},
    {nome: 'Todos', valor:0}
  ];

  visualizar:string = '';

  produtos:Produtos[]=[];

  constructor(private pesquisa:ServicesService) {}

  ngOnInit(): void {
  }

  
  pesquisar_tabela(numero:any):any{

    this.visualizar = 'esperar';    
    this.pesquisa.obterDados().subscribe({
      next:(res)=>{
        if(numero>0){
        const produtos = res.filter((produto:any)=>produto.albumId==numero);
        this.produtos = produtos;
        this.visualizar = 'dados';
        }else{
          const produtos = res;
          this.produtos = produtos;
          this.visualizar = 'dados';
        }
      },
      error:(err)=>{
        this.visualizar = 'esperar';
      }
      
    });
  }
}
