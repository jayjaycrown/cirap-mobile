import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-ndleamenu',
  templateUrl: './ndleamenu.page.html',
  styleUrls: ['./ndleamenu.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class NdleamenuPage implements OnInit {
  pages = [
    {
      title: 'Search Personnel',
      url: '/ndleamenu/personnel-search',
      icon: 'search'
    },
    {
      title: 'Report Personnel',
      url: '/ndleamenu/report-personnel',
      icon: 'person'
    },
    {
      title: 'Report Flat',
      url: '/ndleamenu/report-flat',
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
