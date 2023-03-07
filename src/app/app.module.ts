import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { PlacesComponent } from './components/places/places.component';
import { PlaceAddComponent } from './components/place-add/place-add.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CategoryComponent,
    NaviComponent,
    CartSummaryComponent,
    VatAddedPipe,
    FilterPipePipe,
    PlacesComponent,
    PlaceAddComponent,
    CategoryAddComponent,
    PlaceDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {positionClass:"toast-bottom-right"}
    )
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
