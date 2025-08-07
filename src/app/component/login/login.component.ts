import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  loginForm: FormGroup;
  auth:boolean;
  constructor(private fb: FormBuilder, private router: Router, private booksService:BooksService ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
     
    if (this.loginForm.valid) {
     alert('Login successful!');
      
     if( username === "admin" && password === "1234"){
      localStorage.setItem('username', username);
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin']);
     }
     else{
     localStorage.setItem('username', username);
     localStorage.setItem('role', 'user');
      this.router.navigate(['/home']);
    }
    
    this.booksService.updateState();
      console.log('logn',this.booksService.updateState())
  }
  }
}
