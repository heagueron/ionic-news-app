import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

import { Article } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  // According to https://ionicframework.com/docs/building/storage

  // noticias guardadas como 'favoritas'
  noticias: Article[] = [];

  constructor( 
    private storage: Storage,
    private toastController: ToastController
     ) { 

    this.cargarFavoritos();

  }

  guardarNoticia( noticia: Article ) {

    
    const existe = this.noticias.find( noti => noti.title === noticia.title );
    
    if ( !existe ) {
      this.noticias.unshift( noticia );
      this.storage.set( 'favoritos', this.noticias ); // this.noticias ??
      this.presentToast('Noticia guardada en favoritas');
    } else {
      this.presentToast('La noticia ya está en favoritas');
    }

  }

  removerFavorito( noticia: Article ) {

    this.noticias = this.noticias.filter( noti => noti.title !== noticia.title);
    this.storage.set( 'favoritos', this.noticias );
    this.presentToast('Noticia removida de favoritas');

  }

  async cargarFavoritos() {
    // get retorna aqui una promesa ... por lo tanto, usamos async/await
    const favoritos = await this.storage.get('favoritos');

    if ( favoritos ) {
      this.noticias = favoritos;
    }

  }

  async presentToast( message: string ) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }




}
