import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel-search',
  templateUrl: './personnel-search.page.html',
  styleUrls: ['./personnel-search.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PersonnelSearchPage implements OnInit {
  showResult = false;
  constructor() { }
  displayResult() {
    this.showResult = true;
  }

  ngOnInit() {
  }

}
