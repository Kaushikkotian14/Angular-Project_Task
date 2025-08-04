import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
term: string = ''; 
 result: string = '';
 onSearch() {
   if (!this.term) {
       this.result = '';
       return;
     }
    this.result = `You searched for: ${this.term}`;
}
}
