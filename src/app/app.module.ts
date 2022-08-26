import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishComponent } from './components/dish/dish.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './components/login/login.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    IngredientComponent,
    IngredientListComponent,
    DishListComponent,
    DishComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    AuthModule.forRoot({
      domain: 'dev-64emz5cl.us.auth0.com',
      clientId: 'DS0Nmr594dmSC3OqWjWOiqShTkn0i3Xa'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
