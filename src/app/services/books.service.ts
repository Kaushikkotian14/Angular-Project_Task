import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book} from '../model/books.model';

const username = localStorage.getItem('username') || {};

@Injectable({
  providedIn: 'root'
})


export class BooksService {

  public auth = new BehaviorSubject<boolean>(false);
  
  

  private apiUrl = 'http://localhost:3000/books'; 

  constructor(private http: HttpClient) { }

  
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book:Book[]):Observable<any>{
     return this.http.post<any>(this.apiUrl,book);
  }

}

// json-server --watch db.json --port 3000
