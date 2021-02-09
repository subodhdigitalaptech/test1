import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dataSource: any = [];
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.apiService.getMoviesById(id)
      .subscribe(movie => {
        this.dataSource = movie;
        console.log( this.dataSource);

      });
  }
  

  back(): void {
    this.router.navigateByUrl('/')

  }
}
