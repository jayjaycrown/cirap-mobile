import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-civildefense-menu',
  templateUrl: './civildefense-menu.page.html',
  styleUrls: ['./civildefense-menu.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class CivildefenseMenuPage implements OnInit {

  pages = [
    {
      title: 'Search Personnel',
      url: '/civildefense/personnel-search',
      icon: 'search'
    },
    {
      title: 'Report Personnel',
      url: '/civildefense/report-personnel',
      icon: 'person'
    },
    {
      title: 'Report Flat',
      url: '/civildefense/report-flat',
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
