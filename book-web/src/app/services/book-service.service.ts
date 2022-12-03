import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book, BookItem, BookList } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = `${environment.url}/books`;
  // private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(protected http: HttpClient) {}

  /**
   * Lista de libros
   */
   public findAllBooks(): Observable<BookList> { // { headers: this.httpHeaders }
    return this.http.get<BookList>(`${this.url}`).pipe(
      catchError((e) => of(e.error)));
  }

  /**
   * Obtener libro por el id
   * @param id del libro
   */
  public findBookById(id: string): Observable<BookItem> {
    return this.http.get<BookItem>(`${this.url}/${id}`).pipe(
      catchError((e) => of(e.error)));
  }

  /**
   * Guardar libro
   * @param book libro a guardar
   */
  public saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.url}`, book).pipe(
      catchError((e) => of(e.error)));
  }

  /**
   * Actualizar libro
   * @param book libro a actualizar
   */
  public updateBook(book: Book): Observable<Book> { 
    return this.http.put<Book>(`${this.url}/${book.uid}`, book).pipe(
      catchError((e) => of(e.error)));
  }

  /**
   * Eliminar libro
   * @param id del libro a eliminar
   */
  public deleteBookById(uid: string): Observable<BookItem> {
    return this.http.delete<BookItem>(`${this.url}/${uid}`).pipe(
      catchError((e) => of(e.error)));
  }


}
