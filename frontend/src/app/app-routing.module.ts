import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';



const routes: Routes = [
  {path:'',component:PropertyListComponent},
  {path:'rent',component:PropertyListComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'**',component:PropertyListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
