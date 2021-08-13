import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {
    path:'', component: LoginPageComponent,
  },
  {
    path:'table', component: TablePageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TablePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
