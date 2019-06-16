import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(noticiasService) {
        this.noticiasService = noticiasService;
        this.noticias = [];
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.cargarNoticias();
    };
    // for infinite scrolling
    Tab1Page.prototype.loadData = function (event) {
        this.cargarNoticias(event); // the event carries a "target.complete" method
    };
    Tab1Page.prototype.cargarNoticias = function (event) {
        var _this = this;
        this.noticiasService.getTopHeadLines()
            .subscribe(function (resp) {
            var _a;
            console.log(resp);
            if (resp.articles.length === 0) {
                // hay que cancelar el infinite scroll
                event.target.disabled = true;
                event.target.complete();
                return;
            }
            //this.noticias = resp.articles;
            //this.noticas.push(resp.noticias); genera un solo arreglo!
            (_a = _this.noticias).push.apply(_a, resp.articles); // arreglo de objetos de noticias
            if (event) {
                event.target.complete();
            }
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NoticiasService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
// El tipado podemos poner aqui con
// .subscribe( ( resp: RespuestaTopHeadlines ) => {
// o en el servicio para mejorar legibilidad en el componente.
//# sourceMappingURL=tab1.page.js.map