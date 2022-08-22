import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  
  produto = [
    {type: 1, title: 'Paisagem'},
    {type: 2, title: 'Flor'},
    {type: 3, title: 'Pizza'},
  ];

  todosProdutos: any;

  private list_produtos_url = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json';

  constructor(public http : HttpClient) {
    
  }

  ngOnInit(): void {
    this.getProdutos()
    this.updateFilter(this.todosProdutos)
  }

  getProdutos() {
    this.http.get(this.list_produtos_url).subscribe((produtos:any)=>{
      this.todosProdutos = produtos
    })
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

      if(!val) this.produto = this.todosProdutos
      else
      this.todosProdutos = this.produto.filter(a =>
            a.title.toUpperCase().indexOf(val))
  }

  excluirCard() {}

}
