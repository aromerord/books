import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html'
})
export class BookModalComponent {

  @Input() uid: string;
  @Output() bookModalEvent = new EventEmitter<string>();

  constructor(protected bookService: BookService,
              protected toast: ToastrService) { 
    this.uid = '';
  }

  protected deleteBook(): void {
    this.bookService.deleteBookById(this.uid).pipe(take(1)).subscribe({
      next: (res) => {
        if(res.ok){
          this.bookModalEvent.emit('bookDeleted');
        }else {
          this.toast.error(res.msg, '');
        }
        
      },
      error: () => console.log('Se ha producido un error en la aplicación.')
    })
  }


}
