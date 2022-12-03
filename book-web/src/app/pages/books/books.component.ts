import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Book } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  protected books: Book[];
  protected booksToShow: Book[];
  protected page: number;
  protected pageSize: number;
  protected showModal: boolean;
  protected idBook: any;
  protected printBooks: Boolean;
  protected filterBooks: string;

  constructor(protected bookService: BookService,
    protected toast: ToastrService) {
    this.showModal = false;
    this.books = [];
    this.booksToShow = [];
    this.page = 1;
    this.pageSize = 5;
    this.idBook = 0;
    this.printBooks = false;
    this.filterBooks = '';
  }

  ngOnInit(): void {
    this.findAllBooks();
  }

  /**
   * Obtiene la lista de libros
   */
  public findAllBooks(): void {
    this.bookService.findAllBooks().pipe(take(1)).subscribe({
      next: (res) => {
        if (res.ok) {
          this.books = res.books;
          this.booksToShow = res.books;
        }
      },
      error: (e) => this.toast.error(e, '')
    })
  }

  /**
   * Settea el id del libro a eliminar 
   */
  protected setIdBookToDelete(idBook: any) {
    this.idBook = idBook;
  }

  /**
   * Recarga la tabla tras la eliminación de un registro
   */
  protected reloadTable(event: string) {
    if (event === 'bookDeleted') {
      this.toast.success('Libro eliminado con éxito', '');
      this.findAllBooks();
    }
  }

  /**
   * Método que hace la exportación a excel de la tabla
   */
  protected exportExcel() {
    let Heading = [['Título', 'Autor', 'Editorial', 'Categoría', 'Publicación', 'Leído']];

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.books);
    XLSX.utils.sheet_add_aoa(ws, Heading);
    // Generación del workbook y del worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
    // Guardado del archivo
    XLSX.writeFile(workbook, `Lista de libros.xlsx`);
  }

  /**
   * Filtra la lista de libros
   */
  protected handleFilterTitle() {
    this.booksToShow = this.books.filter(book =>
      book.title.indexOf(this.filterBooks) !== -1 ||
      book.author.indexOf(this.filterBooks) !== -1 ||
      book.category.indexOf(this.filterBooks) !== -1 ||
      book.editorial.indexOf(this.filterBooks) !== -1);
  }

}
