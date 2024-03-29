import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-frscmenu',
  templateUrl: './frscmenu.page.html',
  styleUrls: ['./frscmenu.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class FrscmenuPage implements OnInit {
  pages = [
    {
      title: 'Search Personnel',
      url: '/frscmenu/personnel-search',
      icon: 'search'
    },
    {
      title: 'Report Personnel',
      url: '/frscmenu/report-personnel',
      icon: 'person'
    },
    {
      title: 'Report Flat',
      url: '/frscmenu/report-flat',
      icon: 'home'
    }
  ];

  selectedPath = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
  ngOnInit() {
  }

}
