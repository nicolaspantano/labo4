import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaUnoComponent } from './components/ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './components/ruta-dos/ruta-dos.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaUnoComponent,
    RutaDosComponent,
    HomeComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
