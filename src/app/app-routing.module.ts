import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaUnoComponent } from './components/ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './components/ruta-dos/ruta-dos.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'ruta-uno',
    component:RutaUnoComponent
  },
  {
    path:'ruta-dos',
    component:RutaDosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
