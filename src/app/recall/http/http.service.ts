import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);

  // API_URL = "https://www.mockachino.com/7af4a49d-6a40-4f/pegilysys/emp-details"

  API_URL = 'http://localhost:3000/empDetails';



  addUser(userData: any) {
    return this.http.post(this.API_URL, userData);
  }

  getUserData() {
    return this.http.get(this.API_URL).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
