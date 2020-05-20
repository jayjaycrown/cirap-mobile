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
      title: 'Personnel Identification',
      url: '/policemenu/personnel-identification'
    },
    {
      title: 'Report Personnel',
      url: '/policemenu/report-personnel'
    },
    {
      title: 'Send a Tipoff',
      url: '/policemenu/tipoff'
    },
    {
      title: 'Report A Crime',
      url: '/policemenu/crime-report'
    },
    {
      title: 'Write Statement',
      url: '/policemenu/write-statement'
    },
    {
      title: 'Wanted List',
      url: '/policemenu/wanted-list'
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
