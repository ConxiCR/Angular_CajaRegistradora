import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //modelo Producto definido en producto.model.ts
  arrComida: Producto[];
  arrBebida: Producto[];

  productosSeleccionados: Producto[];
  constructor(){
    this.productosSeleccionados = [];

    this.arrComida = [
      new Producto('pizza','https://www.petitchef.es/imgupl/recipe/pizza-carbonara-con-bacon-y-cebolla--md-452894p701394.jpg', 11.50),
      new Producto('hamburguesa','https://www.petitchef.es/imgupl/recipe/hamburguesa-con-queso-raclette--md-457334p712602.jpg', 8.50),
      new Producto('espaguettis','https://www.petitchef.es/imgupl/recipe/espaguettis-con-gambas-y-calabacin-jamie-oliver--md-276753p450132.jpg', 10.00),
      new Producto('lassaña','https://www.petitchef.es/imgupl/recipe/lasana-vegetariana-de-espinacas-y-queso-de-cabra--md-450821p697182.jpg', 9.80),
      new Producto('ñoqui','https://www.petitchef.es/imgupl/recipe/noquis-con-setas--md-265537p431161.jpg', 7.20),
      new Producto('hummus','https://www.petitchef.es/imgupl/recipe/hummus-de-zanahoria--md-457558p713374.jpg', 6.45),
    ]
    this.arrBebida = [
      new Producto('agua','https://www.compraonline.bonpreuesclat.cat/images-v3/dcbcfd72-cf23-44a2-8e14-8a38edd645a3/89d76dda-d551-4c1a-83cc-b35380614d6d/500x500.jpg', 1.50),
      new Producto('cerveza','https://www.compraonline.bonpreuesclat.cat/images-v3/dcbcfd72-cf23-44a2-8e14-8a38edd645a3/4d4e1ec4-18ec-4982-8267-90b2a6ec90db/500x500.jpg', 2.50),
      new Producto('nestea','https://www.compraonline.bonpreuesclat.cat/images-v3/dcbcfd72-cf23-44a2-8e14-8a38edd645a3/4d82766a-50d3-4d8e-bd16-e257270cbd49/500x500.jpg', 2.50),
      new Producto('coca-cola','https://www.compraonline.bonpreuesclat.cat/images-v3/dcbcfd72-cf23-44a2-8e14-8a38edd645a3/c79c0842-b258-49a5-b540-76097c9b4c28/500x500.jpg', 2.50),
    ]
  }
  onProductoSeleccionado($event){
    //console.log($event)
    //this.productosSeleccionados.push($event);
    
    const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);
    if(productoEncontrado){
      productoEncontrado.cantidad++;
    }else{
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
    }
    console.log(this.productosSeleccionados);
  }
}
