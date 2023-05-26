import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})
export class ListaFacturasComponent {

  facturasCollection: AngularFirestoreCollection<any>;
  facturas: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.facturasCollection = firestore.collection('facturas');
    this.facturas = this.facturasCollection.valueChanges();
  }

  eliminarFactura(facturaId: string) {
    this.firestore.collection('facturas').doc(facturaId).delete()
      .then(() => {
        console.log('Factura eliminada exitosamente.');
      })
      .catch((error) => {
        console.error('Error al eliminar la factura:', error);
      });
  }


}
