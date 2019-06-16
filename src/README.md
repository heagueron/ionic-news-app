THIS APP WILL USE THE API FROM newsapi.org
So we register and got an api key there and read how to query.
(put in your environments folder)

Main steps:
* Create the ionic app: ionic start noticias tabs
* Create app/pages folder, put inside the tabs and adjust app-routing.module
* Test with: ionic serve
* Add apiKey in files environments.ts y environments.prod.ts
* Test a query with postman, example:
https://newsapi.org/v2/top-headlines?country=us&apiKey='your_api_key'

* Create a service: ionic g s services/noticias

* Importar en app.module:
import { HttpClientModule } from '@angular/common/http';

* Inject http in services/noticias
* Create in services/noticias a query for the whole news and test it

* Prepare the interfaces (models) according with the received objects

* Use the information in the main tab1 page (inside a <ion-grid>)


# Create a modulo for thecomponents Noticias (list) y Noticia (detail)
ionic g m components --skipTest=true
ionic g c components/noticias --skipTest=true
ionic g c components/noticia --skipTest=true
# ( make sure both components are include/declared in components.module )

* Pass html noticias section from tab1.html to noticias.html (<ion-grid> and its contents)
* Add ionic in components:
import { IonicModule } from '@ionic/angular';

* In components.module export NoticiasComponent.

* Adjustar noticias.ts to receive noticias by @Input from its parent Tab1.
* Importr ComponentsModule in Tab1.module.

* Add in tab1.html section ion-content:
<app-noticias [noticias]="noticias" ></app-noticias>

* Test.

* Refactor NoticiasComponent :

        <ion-col  size="12" size-lg="3" size-md="4" size-sm="6" size-xs="12"
                *ngFor="let noticia of noticias; let i = index">

                <app-noticia [noticia]="noticia" [i]=i ></app-noticia>

        </ion-col>

....


