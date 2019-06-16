import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  // Para establecer valor por defecto:
  @ViewChild(IonSegment) segment: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];

  constructor( private noticiasservices: NoticiasService ) {}

  ngOnInit() {
    // Para establecer valor por defecto:
    this.segment.value = this.categorias[0];
    this.cargarNoticias( this.categorias[0] );
  }

  seleccionarCategoria( event: any ) {

    this.noticias = []; // Se reconstruye, sino el push agrega al final
    this.cargarNoticias( event.detail.value );

  }

  cargarNoticias( categoria: string, event?: any ){

    this.noticiasservices.getTopHeadLinesCategoria( categoria )
      .subscribe( resp => {
        console.log(resp);

        if ( resp.articles.length === 0 ) {
          // hay que cancelar el infinite scroll
          event.target.disabled = true;
          event.target.complete();
          return;
        }


        this.noticias.push( ...resp.articles );


        if ( event ) {
          event.target.complete();
        }

      });

  }

  loadData( event: any ) {
    this.cargarNoticias( this.segment.value, event );
  }


}
