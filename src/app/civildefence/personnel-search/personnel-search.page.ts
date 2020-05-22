import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel-search',
  templateUrl: './personnel-search.page.html',
  styleUrls: ['./personnel-search.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PersonnelSearchPage implements OnInit {

  showResult = false;
  constructor(private router: Router) { }
  goHome() {
    this.router.navigateByUrl('/home');
  }

  displayResult() {
    this.showResult = true;
  }

  ngOnInit() {
  }

}
