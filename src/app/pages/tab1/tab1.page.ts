import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  noticias: Article[] = [];

  constructor(
    private noticiasService: NoticiasService
  ) {}


  ngOnInit() {
    this.cargarNoticias();
  }

  // for infinite scrolling
  loadData( event: any ) {
    this.cargarNoticias( event ); // the event carries a "target.complete" method
  }

  cargarNoticias( event?: any ) {

    
    this.noticiasService.getTopHeadLines()
      .subscribe( resp => {
        console.log(resp);

        if ( resp.articles.length === 0 ) {
          // hay que cancelar el infinite scroll
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        //this.noticias = resp.articles;
        //this.noticas.push(resp.noticias); genera un solo arreglo!
        this.noticias.push( ...resp.articles ); // arreglo de objetos de noticias

        if ( event ) {
          event.target.complete();
        }

      }

      );
  }

}

// El tipado podemos poner aqui con
// .subscribe( ( resp: RespuestaTopHeadlines ) => {
// o en el servicio para mejorar legibilidad en el componente.
