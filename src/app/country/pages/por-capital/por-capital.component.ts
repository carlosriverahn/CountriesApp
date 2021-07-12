import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from '../../model/country';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = ""
  error: boolean = false;
  countries: Country[] = [];
  @Output() placeholder: string = "Buscar por capital";

  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.error =  false;
    this.termino =  termino;
    this.paisService.buscarCapital(termino)
        .subscribe( (data) => {
          this.countries = data
         },(err) => {
          this.error =  true;
          this.countries = []; 
        });
  }

  suggestion(){
    this.error = false;

  }

}