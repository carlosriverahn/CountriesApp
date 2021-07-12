import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  baseUrl: string = "https://restcountries.eu/rest/v2";

  get httpParams(){
    return new HttpParams().set("fields", "name;capital;alpha2Code;flag;population");
  }  


  constructor(private http: HttpClient) { }

  buscarPais( termino:string ): Observable<Country[]>{
    const url =`${this.baseUrl}/name/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital( termino:string ): Observable<Country[]>{
    const url =`${this.baseUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  verPais( id:string ): Observable<Country>{
    const url =`${this.baseUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

  verRegion( region:string ): Observable<Country[]>{
    const url =`${this.baseUrl}/region/${region}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}