import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent {

  constructor(private firestore: AngularFirestore) { }

  guardarFactura(facturaForm: NgForm) {
    const factura = { ...facturaForm.value };
    factura.subtotal =
      factura.totalDescuento =
      factura.totalPagar =

      this.firestore.collection('facturas').add(factura)
        .then(() => {
          console.log('Factura guardada exitosamente.');
          facturaForm.reset();
        })
        .catch((error) => {
          console.error('Error al guardar la factura:', error);
        });
  }
}
