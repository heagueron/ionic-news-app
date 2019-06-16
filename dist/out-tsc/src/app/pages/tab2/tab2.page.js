import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(noticiasservices) {
        this.noticiasservices = noticiasservices;
        this.categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
        this.noticias = [];
    }
    Tab2Page.prototype.ngOnInit = function () {
        // Para establecer valor por defecto:
        this.segment.value = this.categorias[0];
        this.cargarNoticias(this.categorias[0]);
    };
    Tab2Page.prototype.seleccionarCategoria = function (event) {
        this.noticias = []; // Se reconstruye, sino el push agrega al final
        this.cargarNoticias(event.detail.value);
    };
    Tab2Page.prototype.cargarNoticias = function (categoria, event) {
        var _this = this;
        this.noticiasservices.getTopHeadLinesCategoria(categoria)
            .subscribe(function (resp) {
            var _a;
            console.log(resp);
            if (resp.articles.length === 0) {
                // hay que cancelar el infinite scroll
                event.target.disabled = true;
                event.target.complete();
                return;
            }
            (_a = _this.noticias).push.apply(_a, resp.articles);
            if (event) {
                event.target.complete();
            }
        });
    };
    Tab2Page.prototype.loadData = function (event) {
        this.cargarNoticias(this.segment.value, event);
    };
    tslib_1.__decorate([
        ViewChild(IonSegment),
        tslib_1.__metadata("design:type", IonSegment)
    ], Tab2Page.prototype, "segment", void 0);
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NoticiasService])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map