import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private booksService:BooksService){}
  ngOnInit(): void {
    this.checkLogInState();
    }

    checkLogInState(){
    if(localStorage.getItem('username')){
    this.booksService.auth.next(true);
    this.isLoggedIn = this.booksService.auth.value;
    }else {
      this.isLoggedIn = false;
    }
    }
 
 
 logout(){
  localStorage.removeItem('username');
  localStorage.removeItem('role');
  this.checkLogInState();
 }
}
