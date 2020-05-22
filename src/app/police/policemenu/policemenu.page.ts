import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-policemenu',
  templateUrl: './policemenu.page.html',
  styleUrls: ['./policemenu.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PolicemenuPage implements OnInit {
  pages = [
    {
      title: 'Search Personnel',
      url: '/policemenu/personnel-identification',
      icon: 'home'
    },
    {
      title: 'Report Personnel',
      url: '/policemenu/report-personnel',
      icon: 'home'
    },
    {
      title: 'Report Flat',
      url: '/policemenu/report-flat',
      icon: 'home'
    },
    {
      title: 'Send a Tipoff',
      url: '/policemenu/tipoff',
      icon: 'home'
    },
    {
      title: 'Report A Crime',
      url: '/policemenu/crime-report',
      icon: 'home'
    },
    {
      title: 'Write Statement',
      url: '/policemenu/write-statement',
      icon: 'home'
    },
    {
      title: 'Wanted List',
      url: '/policemenu/wanted-list',
      icon: 'home'
    },
    {
      title: 'Missing Persons',
      url: '/policemenu/missing-persons',
      icon: 'home'
    },
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
