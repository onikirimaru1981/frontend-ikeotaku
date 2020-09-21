import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AlmacenOtakuComponent } from './almacen-otaku/almacen-otaku.component';
import { AnimesComponent } from './almacen-otaku/animes/animes.component';
import { MangasComponent } from './almacen-otaku/mangas/mangas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  // { path: 'almacen-otaku', component: AlmacenOtakuComponent },
  { path: 'almacen-otaku/animes', component: AnimesComponent },
  { path: 'almacen-otaku/mangas', component: MangasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: NoFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
