import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksComponent } from './pages/books/books.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookModalComponent } from './components/book-modal/book-modal.component';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomMinDirective } from './directives/custom-min.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsComponent } from './pages/forms/forms.component';
import { BasicFormsComponent } from './components/basic-forms/basic-forms.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { SwitchesFormsComponent } from './components/switches-forms/switches-forms.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookFormComponent,
    BookModalComponent,
    CustomMinDirective,
    FormsComponent,
    BasicFormsComponent,
    DynamicFormsComponent,
    SwitchesFormsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BootstrapModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        timeOut: 2000
      })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
