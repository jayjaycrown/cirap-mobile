import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel-identification',
  templateUrl: './personnel-identification.page.html',
  styleUrls: ['./personnel-identification.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PersonnelIdentificationPage implements OnInit {
  showResult = false;
  constructor(private router: Router) { }

  displayResult() {
    this.showResult = true;
  }
  goHome() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
