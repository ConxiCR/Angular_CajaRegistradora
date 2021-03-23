import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
 
  @Input() arrProductos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }
//metodo para calcular el total de la comanda
  calculaTotal(){
    let resultado = 0;
    for(let producto of this.arrProductos){
      resultado += (producto.precio * producto.cantidad);
    }
    return resultado;

  }

  onClickBorrar(indice){
    //eliminar producto de uno en uno
    if(this.arrProductos[indice].cantidad === 1){
      this.arrProductos.splice(indice, 1);
    }else{
      this.arrProductos[indice].cantidad --;
    }
    
  }

}
