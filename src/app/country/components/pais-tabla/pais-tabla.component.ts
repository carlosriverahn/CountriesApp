import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../model/country';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  termino: string = ""
  error: boolean = false;
  @Input() countries: Country[] = [];
  @Input() placeholder: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
