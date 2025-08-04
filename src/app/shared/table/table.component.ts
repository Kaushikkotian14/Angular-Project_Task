import { Component,OnInit,Input } from '@angular/core';
import { Injectable } from '@angular/core';
// import { Book } from '../../model/books.model';
import { BooksService } from 'src/app/services/books.service';


export interface Book {
    title: string;
    author: string;
    price: number;
    description: string;
    imgUrl: string;
    Available: boolean;
}
@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private booksService: BooksService) { }
  books: Book[] = [];
 public displayedColumns: string[] = ['title', 'author', 'description', 'price', 'availability'];
@Input() dataSource: Book[] = [];

  ngOnInit() {
    this.fetchBooks();
    
  }

  fetchBooks() {
    this.booksService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

    
    

}
