import { Component, inject } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  imports: [],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {

  httpService = inject(HttpService)

  ngOnInit() {
    this.httpService.getUserData()
  }

}
