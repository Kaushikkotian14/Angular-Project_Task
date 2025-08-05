import { Component,Input } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/books.model';





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  constructor(private booksService: BooksService) { }
  
 @Input() displayedColumns: string[] = [];
@Input() dataSource: Book[] = [];

  
  }

    
    


