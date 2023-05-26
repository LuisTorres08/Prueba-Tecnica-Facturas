import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFacturaComponent } from './component/crear-factura/crear-factura.component';
import { HomeComponent } from './component/home/home.component';
import { ListaFacturasComponent } from './component/lista-facturas/lista-facturas.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  { path: 'crear-factura', component: CrearFacturaComponent },
  { path: 'lista-facturas', component: ListaFacturasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
