import { Component } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mlb-scores';
  private apiUrl = '';
  data: any = {};

constructor(private http: HttpClient) {
  console.log("hello works");
  this.getGames();
  this.getData();
}
getData(){
  return this.http.get(this.apiUrl).pipe(map((response: any) => response.json()));
}

getGames(){
  this.getData().subscribe(data => {
    console.log(data);
    this.data = data
  })
}
}



