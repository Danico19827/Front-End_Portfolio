import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ErrorComponent } from './components/error/error.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { BotonInicioComponent } from './components/boton-inicio/boton-inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { RedesComponent } from './components/redes/redes.component';
import { VentanaProyectosComponent } from './components/ventana-proyectos/ventana-proyectos.component';
import { EducacionComponent } from './components/banner/educacion/educacion.component';
import { ExperienciaComponent } from './components/banner/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/banner/habilidades/habilidades.component';
import { MiInformacionComponent } from './components/banner/mi-informacion/mi-informacion.component';
import { ProyectosComponent } from './components/banner/proyectos/proyectos.component';
import { TitulosComponent } from './components/banner/titulos/titulos.component';
import { CuerpoProyectosComponent } from './components/mostrar-proyectos/cuerpo-proyectos/cuerpo-proyectos.component';
import { IntroduccionComponent } from './components/mostrar-proyectos/introduccion/introduccion.component';
import { EditarSobreMiComponent } from './components/Modals/editar-sobre-mi/editar-sobre-mi.component';
import { LogOutComponent } from './components/Modals/log-out/log-out.component';
import { LoginComponent } from './components/Modals/login/login.component';
import { EducacionAdminComponent } from './components/banner-admin/educacion-admin/educacion-admin.component';
import { ExperienciaAdminComponent } from './components/banner-admin/experiencia-admin/experiencia-admin.component';
import { HabilidadesAdminComponent } from './components/banner-admin/habilidades-admin/habilidades-admin.component';
import { MiInformacionAdminComponent } from './components/banner-admin/mi-informacion-admin/mi-informacion-admin.component';
import { ProyectosAdminComponent } from './components/banner-admin/proyectos-admin/proyectos-admin.component';
import { TitulosAdminComponent } from './components/banner-admin/titulos-admin/titulos-admin.component';
import { AgregarHabilidadComponent } from './components/Modals/agregar-habilidad/agregar-habilidad.component';
import { AgregarTitulosComponent } from './components/Modals/agregar-titulos/agregar-titulos.component';
import { VentanaProyectosAdminComponent } from './components/ventana-proyectos-admin/ventana-proyectos-admin.component';
import { CuerpoProyectosAdminComponent } from './components/mostrar-proyectos-admin/cuerpo-proyectos-admin/cuerpo-proyectos-admin.component';
import { IntroduccionAdminComponent } from './components/mostrar-proyectos-admin/introduccion-admin/introduccion-admin.component';
import { BotonAdminComponent } from './components/boton-admin/boton-admin.component';
import { AgregarProyectoComponent } from './components/Modals/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './components/Modals/editar-proyecto/editar-proyecto.component';
import { EditarHabilidadComponent } from './components/Modals/editar-habilidad/editar-habilidad.component';
import { EditarTituloComponent } from './components/Modals/editar-titulo/editar-titulo.component';
import { AgregarEducacionComponent } from './components/Modals/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './components/Modals/editar-educacion/editar-educacion.component';
import { EditarFotoComponent } from './components/Modals/editar-foto/editar-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ErrorComponent,
    AdministradorComponent,
    BotonInicioComponent,
    NavbarComponent,
    NavbarAdminComponent,
    RedesComponent,
    VentanaProyectosComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    MiInformacionComponent,
    ProyectosComponent,
    TitulosComponent,
    CuerpoProyectosComponent,
    IntroduccionComponent,
    EditarSobreMiComponent,
    LogOutComponent,
    LoginComponent,
    EducacionAdminComponent,
    ExperienciaAdminComponent,
    HabilidadesAdminComponent,
    MiInformacionAdminComponent,
    ProyectosAdminComponent,
    TitulosAdminComponent,
    AgregarHabilidadComponent,
    AgregarTitulosComponent,
    VentanaProyectosAdminComponent,
    CuerpoProyectosAdminComponent,
    IntroduccionAdminComponent,
    BotonAdminComponent,
    AgregarProyectoComponent,
    EditarProyectoComponent,
    EditarHabilidadComponent,
    EditarTituloComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    EditarFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
