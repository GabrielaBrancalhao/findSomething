import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  produtos:any = [];
  todosProdutos: any = [];

  private list_produtos_url = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json';

  listProd = [ 
    {id: 'Type 1', title: 'Paisagem'},
    {id: 'Type 2', title: 'Flor'},
    {id: 'Type 3', title: 'Pizza'}
  ]

  constructor(public http : HttpClient) { }

  ngOnInit(): void {
    this.getProdutos()
  }

  getProdutos() {
    this.http.get(this.list_produtos_url).subscribe((produtos:any)=>{
      this.todosProdutos = produtos
    })
    
  }
  

  updateFilter(event: any) {
    this.produtos = this.todosProdutos.filter((p: { produtos: any; }) => p.produtos === val)
    let val = event.target.value.toLowerCase();
    this.produtos = this.listProd;
  }

  excluirCard() { 

  }

}
