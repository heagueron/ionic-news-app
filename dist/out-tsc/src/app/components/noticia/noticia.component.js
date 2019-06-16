import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
var NoticiaComponent = /** @class */ (function () {
    function NoticiaComponent(iab, actionSheetController) {
        this.iab = iab;
        this.actionSheetController = actionSheetController;
        this.i = 0;
    }
    NoticiaComponent.prototype.ngOnInit = function () { };
    NoticiaComponent.prototype.abrirNoticia = function () {
        // Aqui debemos utilizar un plugin, In App Browser
        // https://ionicframework.com/docs/native/in-app-browser
        // Una vez instalado, primero hay que importarlo al app.module
        // Abre ( con nueva pestaña en browser del pc o navega en mobil)
        var browser = this.iab.create(this.noticia.url, '_system');
    };
    NoticiaComponent.prototype.lanzarMenu = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            //header: 'Albums',
                            buttons: [
                                /*{
                                  text: 'Delete',
                                  role: 'destructive',
                                  icon: 'trash',
                                  handler: () => {
                                    console.log('Delete clicked');
                                  }
                                },*/
                                {
                                    text: 'Compartir',
                                    icon: 'share',
                                    cssClass: 'action-dark',
                                    handler: function () {
                                        console.log('Share clicked');
                                    }
                                }, {
                                    text: 'Favorito',
                                    icon: 'heart',
                                    cssClass: 'action-dark',
                                    handler: function () {
                                        console.log('fav clicked');
                                    }
                                },
                                /*{
                                  text: 'Favorite',
                                  icon: 'heart',
                                  handler: () => {
                                    console.log('Favorite clicked');
                                  }
                                },*/
                                {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    cssClass: 'action-dark',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NoticiaComponent.prototype, "noticia", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NoticiaComponent.prototype, "i", void 0);
    NoticiaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-noticia',
            templateUrl: './noticia.component.html',
            styleUrls: ['./noticia.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [InAppBrowser,
            ActionSheetController])
    ], NoticiaComponent);
    return NoticiaComponent;
}());
export { NoticiaComponent };
//# sourceMappingURL=noticia.component.js.map