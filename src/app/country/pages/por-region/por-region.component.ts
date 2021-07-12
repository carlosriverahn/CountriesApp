import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Country } from '../../model/country';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = "";
  countries: Country[] = [];
               
  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  activarRegion( region: string ) {

    if(region === this.regionActiva) {return;}

    this.regionActiva = region;
    this.countries = [];

    this.paisService.verRegion( region )
        .subscribe( data => {
          this.countries = data
           },(err) => {
             err =  true;
             this.countries = []; 
       });

  }

  getClaseCSS( region:string ):string {
    return (region === this.regionActiva) ? "btn btn-primary" : "btn btn-outline-primary";
  }

}
