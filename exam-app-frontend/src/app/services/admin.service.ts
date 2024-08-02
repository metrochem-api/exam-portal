// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = `http://localhost:3000/questions`;

  constructor(private http: HttpClient) { }

  addQuestion(question: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, question);
  }

  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
