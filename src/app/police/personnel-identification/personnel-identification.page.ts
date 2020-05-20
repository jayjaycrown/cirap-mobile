import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel-identification',
  templateUrl: './personnel-identification.page.html',
  styleUrls: ['./personnel-identification.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PersonnelIdentificationPage implements OnInit {
  showResult = false;
  constructor() { }

  displayResult() {
    this.showResult = true;
  }

  ngOnInit() {
  }

}
