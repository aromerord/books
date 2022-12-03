import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book-service.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {

  @ViewChild('bookForm') bookForm!: NgForm;

  protected book: Book;
  protected idBook: any;

  constructor(protected bookService: BookService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected toast: ToastrService) {

      this.book = {
        title: '',
        author: '',
        editorial: '',
        category: '',
        year: 1900,
        read: false
      }
  }

  ngOnInit(): void {
    this.idBook = this.route.snapshot.paramMap.get('id');

    if (this.idBook) {
      this.findBook();
    }
  }

  /**
   * Hace la validación de los inputs
   */
  protected invalidInput(inputName: string): boolean {
    return this.bookForm?.controls[inputName]?.invalid &&
      this.bookForm?.controls[inputName]?.touched;
  }


  /**
   * Guardar nuevo libro
   */
  protected saveBook(): void {
    this.bookService.saveBook(this.book).subscribe({
      next: (res) => {
        if (res.ok) {
          this.bookForm.resetForm({
            title: '',
            author: '',
            editorial: '',
            category: '',
            year: 1900,
            read: false
          });
          this.router.navigate(['/', 'books']);
          this.toast.success('Libro creado con éxito', '');
        } else {
          this.toast.error(res.msg, '')
        }
      },
      error: () => this.toast.error('Se ha producido un error en la aplicación', '')
    })
  }

  /**
   * Obtener libro por el id
   */
  protected findBook() {
    this.bookService.findBookById(this.idBook).subscribe({
      next: (res) => {
        if (res.ok) {
          this.book = res.book;
        } else {
          this.toast.error(res.msg, '');
        }
      },
      error: () => this.toast.error('Se ha producido un error en la aplicación', '')
    })
  }

  /**
   * Actualizar libro
   */
  protected updateBook() {

    this.bookService.updateBook(this.book).subscribe({
      next: (res) => {
        if(res.ok){
          this.router.navigateByUrl('/books')
          this.toast.success('Libro actualizado con éxito', '');
        } else {
          this.toast.error(res.msg, '')
        }
      },
      error: () => this.toast.error('Se ha producido un error en la aplicación', '')
    })

  }

}
