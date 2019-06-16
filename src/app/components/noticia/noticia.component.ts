import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../interfaces/interfaces';

// Plugins
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// Ionic
import { ActionSheetController, Platform } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() i = 0;
  @Input() enFavoritos: boolean;

  constructor( private iab: InAppBrowser,
               private actionSheetController: ActionSheetController,
               private socialSharing: SocialSharing,
               private dataLocalService: DataLocalService,
               private platform: Platform ) { }

  ngOnInit() {}

  abrirNoticia() {
    // Here we use plugin, In App Browser https://ionicframework.com/docs/native/in-app-browser

    const browser = this.iab.create( this.noticia.url, '_system' );

  }

  async lanzarMenu() {

    let guardarBorrarBtn;

    if ( this.enFavoritos ) {
      guardarBorrarBtn = {
        text: 'Quitar de favoritos',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => { // Storage plugin at https://ionicframework.com/docs/building/storage
          console.log('remove fav clicked');
          this.dataLocalService.removerFavorito( this.noticia );
        }
      }

    } else {

      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => { // Storage plugin at https://ionicframework.com/docs/building/storage
          console.log('fav clicked');
          this.dataLocalService.guardarNoticia( this.noticia );
        }
      }

    }


    const actionSheet = await this.actionSheetController.create({

      buttons: [

        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark', // Class defined in global.scss
          handler: () => {

            this.compartirNoticia();

            
          }
        },
        
        guardarBorrarBtn,

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
    await actionSheet.present();
  }

  compartirNoticia() {

    if ( this.platform.is( 'cordova') ) {

      // This only works is Cordova is present:
      this.socialSharing.share( // Plugin at https://ionicframework.com/docs/native/social-sharing
        // Typescript helps exposing required params
        this.noticia.title, 
        this.noticia.source.name,
        '',
        this.noticia.url
      );

    } else {

      // Try the Google`s Share API
      if (navigator['share']) {    // si marcara error tslint navigator['share']
        navigator['share']({
            title: this.noticia.title,
            text: this.noticia.description,
            url: this.noticia.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log(' Función compartir no soportada.');
      }

    }
    

  }

 
}
