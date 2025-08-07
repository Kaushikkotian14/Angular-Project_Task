import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLoggedIn: boolean ;
  constructor(private booksService:BooksService){}
  ngOnInit(): void {
    this.state();

    }

    state(){
      this.booksService.isLoggedIn.subscribe(
        auth => this.isLoggedIn=auth
      )
      console.log('state',this.isLoggedIn);
    }
  
 
 logout(){
  localStorage.removeItem('username');
  localStorage.removeItem('role');
  this.booksService.auth.next(false);
     console.log('logout',this.booksService.auth.value);
 }
}
