import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { debounceTime, tap, switchMap, finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { of } from 'rxjs/internal/observable/of';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://www.omdbapi.com/?apikey=8b0d3b4c';
  constructor(private httpClient: HttpClient) { 

  }

  getMovies(){
    return this.httpClient.get(`${this.apiURL}&s=movies`);
  }

  getMoviesTitle(title){
    return this.httpClient.get(`${this.apiURL}&t=${title}`);
  }

  getMoviesById(id){
    return this.httpClient.get(`${this.apiURL}&i=${id}`);
  }


  getMoviesWithIMDB(data) {

       console.log(data) 
       const nameArr = data.split(',');
       console.log(nameArr);

       return forkJoin(
        nameArr.map((book: any) => {
          return this.httpClient.get(`${this.apiURL}&i=${book}`).pipe(
            map((author: any) => {
              
              return author;
            })
          )
        })
      );
  }

}
