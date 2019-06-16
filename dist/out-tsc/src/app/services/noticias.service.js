import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
var apikey = environment.apiKey;
var apiUrl = environment.apiUrl;
var headers = new HttpHeaders({
    'X-Api-key': apikey
});
var NoticiasService = /** @class */ (function () {
    function NoticiasService(http) {
        this.http = http;
        this.headLinesPage = 0;
        // para implementar infitnite scrolling por categoría:
        this.categoriaActual = '';
        this.categoriaPage = 0;
    }
    NoticiasService.prototype.ejecutarQuery = function (query) {
        // <T> generico
        query = apiUrl + query;
        return this.http.get(query, { headers: headers });
    };
    NoticiasService.prototype.getTopHeadLines = function () {
        this.headLinesPage++;
        return this.ejecutarQuery("/top-headlines?country=us&page=" + this.headLinesPage);
    };
    NoticiasService.prototype.getTopHeadLinesCategoria = function (categoria) {
        if (this.categoriaActual === categoria) {
            this.categoriaPage++;
        }
        else {
            this.categoriaPage = 1;
            this.categoriaActual = categoria;
        }
        return this.ejecutarQuery("/top-headlines?country=us&category=" + categoria + "&page=" + this.categoriaPage);
    };
    NoticiasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], NoticiasService);
    return NoticiasService;
}()); // End of class
export { NoticiasService };
// podemos pedir con:
// .get<RespuestaTopHeadlines>(`${apiUrl}/top-headlines?country=us&apiKey=${apikey}`);
// pero mejor via headers.
//# sourceMappingURL=noticias.service.js.map