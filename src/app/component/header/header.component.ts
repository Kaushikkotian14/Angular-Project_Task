import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  
  term='';
  result='';
onSearch() {
  if (!this.term) {
      this.result = '';
      return;
    }
 return this.result = `You searched for header: ${this.term}`;
}
}
