import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/books.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnChanges {
form :FormGroup; 
book:Book[]=[];
colums:string[] =['title', 'author', 'description', 'price','quantity', 'availability'];
table:boolean =false; 
books:Book[]= [];

 constructor(private fb: FormBuilder, private router: Router,private bookService:BooksService ) {
   this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, Validators.required],
      quantity: [null, [Validators.required]],
      imgUrl:['/assets/img3.png', [Validators.required]]
      
    });
  }

  ngOnInit(): void {
    this.getBooks();
    console.log("called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      this.getBooks();
    }
    console.log( "oncg=hange"+this.books);
  }

  
  getBooks(){
  this.bookService.getBooks().subscribe(books => {
    this.books = books;
    console.log(this.books);
  });

}


 
  

    onSubmit() {
    if (this.form.valid) {
      this.book=this.form.value;
      
      this.bookService.addBook(this.book).subscribe({
        next:()=>{
         alert("Book Added Sucessfully!!");
         this.getBooks();
        }
        
        
      })
      this.form.reset()
      console.log(this.form);
      console.log(this.book);
    }
  }
}
