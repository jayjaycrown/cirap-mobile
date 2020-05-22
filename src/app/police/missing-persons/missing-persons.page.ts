import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missing-persons',
  templateUrl: './missing-persons.page.html',
  styleUrls: ['./missing-persons.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class MissingPersonsPage implements OnInit {

  constructor(private router: Router) { }
  goHome() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
