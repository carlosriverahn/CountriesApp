import { Component, OnInit, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../model/country';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = ""
  error: boolean = false;
  seeSuggestion: boolean = false;

  countries: Country[] = [];
  countriesSuggestion: Country[] = [];

  @Output() placeholder: string = "Buscar por pais";


  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.seeSuggestion = false;
    this.error =  false;
    this.termino =  termino;
    this.paisService.buscarPais(termino)
        .subscribe( (data) => {
          this.countries = data
          },(err) => {
            this.error =  true;
            this.countries = []; 
        });
  }

  suggestion( termino: string ){
    this.error = false;
    this.termino =  termino;
    this.seeSuggestion = true;
    console.log(this.termino);

    this.paisService.buscarPais(termino)
        .subscribe(countries => 
          this.countriesSuggestion = countries.splice(0,5),
        (err)=>this.countriesSuggestion = []
          );

  }

  searchSuggestion( termino: string ){
    this.buscar( termino );

  }

}
