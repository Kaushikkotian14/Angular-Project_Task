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
colums:string[] =['title', 'author', 'description', 'price','quantity', 'availability'];
table:boolean =false; 
constructor(private booksService: BooksService) { }
ngOnInit() {
   this.getBooks();
}

showTable(){
  this.table=!this.table;
}

getBooks(){
  this.booksService.getBooks().subscribe(books => {
    this.books = books;
    console.log(this.books);
  });

}

}

