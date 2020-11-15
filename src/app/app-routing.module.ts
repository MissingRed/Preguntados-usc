import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import {NologinGuard} from "./guards/nologin.guard";
const routes: Routes = [
  
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule) ,canActivate : [AuthGuard]},

  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [NologinGuard] },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule', canActivate : [NologinGuard] },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
