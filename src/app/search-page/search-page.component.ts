import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public produtos:any = [];

  public list_produtos_url = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json';

  constructor(public http : HttpClient) { }

  ngOnInit(): void {
    this.getProdutos()
  }

  getProdutos() {
    this.http.get(this.list_produtos_url).subscribe((produtos:any)=>{
      this.produtos = produtos;
      console.log(produtos)
    })
  }

}
