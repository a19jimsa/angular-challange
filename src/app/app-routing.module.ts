import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { HomeComponent } from './home/home.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { LoginComponent } from './login/login.component';
import { MyQuoteComponent } from './my-quote/my-quote.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'update-book', component: UpdateFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quote', component: MyQuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
