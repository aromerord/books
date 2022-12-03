import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BooksComponent } from './pages/books/books.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  { path: 'libros', component: BooksComponent, pathMatch: 'full' },
  { path: 'nuevo-libro', component: BookFormComponent },
  { path: 'editar-libro/:id', component: BookFormComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', redirectTo: 'libros' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
