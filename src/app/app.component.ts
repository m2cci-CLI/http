import { Component } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(private http: HttpClient) {
  this.http.get('https://jsonplaceholder.typicode.com/posts',{
  observe:'body',
  params :(new HttpParams()).set('userId','1')})
  
  .toPromise().then((e) => {console.log(e)})
  
}}
