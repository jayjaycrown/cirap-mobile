import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-army-menu',
  templateUrl: './army-menu.page.html',
  styleUrls: ['./army-menu.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ArmyMenuPage implements OnInit {
  pages = [
    {
      title: 'Search Personnel',
      url: '/armymenu/personnel-search',
      icon: 'search'
    },
    {
      title: 'Report Personnel',
      url: '/armymenu/report-personnel',
      icon: 'person'
    },
    {
      title: 'Report Flat',
      url: '/armymenu/report-flat',
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
