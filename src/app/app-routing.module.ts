import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { VentanaProyectosAdminComponent } from './components/ventana-proyectos-admin/ventana-proyectos-admin.component';
import { VentanaProyectosComponent } from './components/ventana-proyectos/ventana-proyectos.component';


const routes: Routes = [{path: 'index', component:IndexComponent},
{path: 'proyectos', component:VentanaProyectosComponent},
{path: 'administrador', component:AdministradorComponent},
{path: 'administrador/proyectos', component:VentanaProyectosAdminComponent},  
{path: '', redirectTo: '/index', pathMatch:'full'}, 
{path: '**', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }