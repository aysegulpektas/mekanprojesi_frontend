import { CategoryAddComponent } from './components/category-add/category-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceAddComponent } from './components/place-add/place-add.component';
import { PlacesComponent } from './components/places/places.component';
import { LoginComponent } from './components/login/login.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {path:"", pathMatch:"full" ,component:PlacesComponent},
  {path:"places", component:PlacesComponent},
  {path:"places/add",component:PlaceAddComponent},
  {path:"places/category/:categoryId", component:PlacesComponent},
  {path:"category/add",component:CategoryAddComponent},
  {path:"login",component:LoginComponent},
  {path:"place/detail/:placeId",component:PlaceDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
