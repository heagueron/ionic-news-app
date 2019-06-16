import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent() {
        this.noticias = [];
    }
    NoticiasComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], NoticiasComponent.prototype, "noticias", void 0);
    NoticiasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-noticias',
            templateUrl: './noticias.component.html',
            styleUrls: ['./noticias.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NoticiasComponent);
    return NoticiasComponent;
}());
export { NoticiasComponent };
//# sourceMappingURL=noticias.component.js.map