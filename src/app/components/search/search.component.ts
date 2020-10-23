import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  word: string = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.word = params.get('q');
    });
  }

  @HostListener('keydown.enter')
  onEnter(): void {
    this.router.navigateByUrl(`/search/${this.word}`);
  }

}
