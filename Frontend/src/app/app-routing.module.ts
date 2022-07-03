import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';

// import { EmptyComponent } from './empty/empty.component';
import { IpoComponent } from './ipo/ipo.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: "company", component: CompanyComponent },
  { path: "stocks", component: IpoComponent },

  { path: "nav-bar", component: NavbarComponent },
  { path: "home", component: AppComponent },

  { path: "", redirectTo: 'AppComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
