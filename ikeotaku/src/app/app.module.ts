import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlmacenOtakuComponent } from './almacen-otaku/almacen-otaku.component';
import { AnimesComponent } from './almacen-otaku/animes/animes.component';
import { MangasComponent } from './almacen-otaku/mangas/mangas.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NoFoundComponent } from './no-found/no-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlmacenOtakuComponent,
    AnimesComponent,
    MangasComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
    ContactoComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
