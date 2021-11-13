import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http: HttpClient, private appService: AppService) { }

  getBrands() {
    return this.http.get(`${this.appService.url}catalogo/marca/getMarcas`).pipe(map(res => res));
  }

  getCompany(idMarca: string) {
    return this.http.get(`${this.appService.url}/catalogo/empresa/getEmpresas/${idMarca}`)
      .pipe(map(res => res));
  }

  getBranchOffice(idEmpresa: number) {
    return this.http.get(`${this.appService.url}/catalogo/sucursal/getSucursales/${idEmpresa}`)
      .pipe(map(res => res));
  }

  getFinancial(idSucursal: number) {
    return this.http.get(`${this.appService.url}/catalogo/financiera/getFinancieras/${idSucursal}`)
      .pipe(map(res => res));

  }

}
