import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book} from '../model/books.model';

@Injectable({
  providedIn: 'root'
})


export class BooksService {

  private apiUrl = 'http://localhost:3000/books'; 

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

}

// json-server --watch db.json --port 3000
