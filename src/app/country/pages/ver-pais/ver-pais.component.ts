import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../model/country';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  country!:Country;

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.verPais( id ) )
        )
      .subscribe(country => {this.country = country;
                            console.log(this.country)
      })



  //   this.activateRoute.params
  //     .subscribe( ({id}) => {console.log(id); 
      
  //     this.paisService.verPais(id)
  //       .subscribe( data => console.log(data) )

  //   });
  }

}