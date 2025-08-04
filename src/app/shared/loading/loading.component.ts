import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() msg = '';
  loading: boolean = false;

  ngOnInit() {
    this.startLoading();
  }

  startLoading() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  
}
