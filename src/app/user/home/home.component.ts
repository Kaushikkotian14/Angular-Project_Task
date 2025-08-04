import { Component,OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/books.model';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})


export class HomeComponent implements OnInit {
books: Book[] = [];
 
constructor(private booksService: BooksService) { }
ngOnInit() {
  this.booksService.getBooks().subscribe(books => {
    this.books = books;
    console.log(this.books);
  });
}
  
}

