import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book} from '../model/books.model';

const username = localStorage.getItem('username');

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  public auth = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.auth.asObservable();
  login :boolean =false;
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  addBook(book:Book[]):Observable<Book[]>{
     return this.http.post<Book[]>(`${this.apiUrl}/books`,book);
  }
  
    deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateState(){ 
    this.auth.next(true);
    console.log('update',this.auth.value)
    return  this.auth.value;
    }
  }




// json-server --watch db.json --port 3000
