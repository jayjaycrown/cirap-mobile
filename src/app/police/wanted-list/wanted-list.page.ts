import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wanted-list',
  templateUrl: './wanted-list.page.html',
  styleUrls: ['./wanted-list.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class WantedListPage implements OnInit {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
