import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['imdbID', 'Title', 'Year', 'Poster','Like','Details'];
  dataSource: any = [];
  formGroup: FormGroup;
  filteredMovies: any;
  imdbID;
  errorMsg: string;

  pageNumber: any;
  constructor(public formBuilder: FormBuilder, private apiService: ApiService) {


  }
  ngOnInit() {
    this.getMovies();

  }




  getMovies() {
    this.apiService.getMovies().subscribe((data: any) => {
      this.dataSource = data.Search;
    });

  }


  applyFilterById(id){
    console.log(this.imdbID);
    this.apiService.getMoviesWithIMDB(this.imdbID).subscribe((data) => {
      console.log(data);
      this.dataSource = data;
      this.imdbID = null;
    });
  }

  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   if(filterValue !=""){
    this.apiService.getMoviesTitle(filterValue).subscribe((data) => {
      console.log(data);
      this.dataSource = [data];
    });
   }else{
     this.getMovies()
   }
   
    
  }

}
