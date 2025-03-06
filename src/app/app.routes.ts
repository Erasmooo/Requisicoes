import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { InventarioComponent } from './paginas/inventario/inventario.component';
import { RequisicoesComponent } from './paginas/requisicoes/requisicoes.component';
import { VerEstadoComponent } from './paginas/ver-estado/ver-estado.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
      { path: '', component: AppComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inventario', component: InventarioComponent },
      { path: 'requisicoes', component: RequisicoesComponent },
      { path: 'ver-estado', component: VerEstadoComponent }
];


