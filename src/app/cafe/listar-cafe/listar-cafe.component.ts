import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css']
})
export class ListarCafeComponent implements OnInit {
    cafes: Array<Cafe> = [];
    totalCafeOrigen: number = 0;
    totalBlend: number = 0;
    constructor(private cafeService: CafeService) { }

    ngOnInit() {
      this.getCafes();
    }

    getCafes(): void {
      this.cafeService.getCafes().subscribe((response) => {
        this.cafes = response;
        this.totalCafeOrigen = this.cafes.filter((element)=>{return element.tipo == "Café de Origen"}).length;
        this.totalBlend = this.cafes.filter((element)=>{return element.tipo == "Blend"}).length;
      })
    }
}
