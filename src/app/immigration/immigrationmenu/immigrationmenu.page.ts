import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-immigrationmenu',
  templateUrl: './immigrationmenu.page.html',
  styleUrls: ['./immigrationmenu.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ImmigrationmenuPage implements OnInit {
  pages = [
    {
      title: 'Personnel Identification',
      url: '/immigrationmenu/personnel-search'
    },
    {
      title: 'Report Personnel',
      url: '/immigrationmenu/report-personnel'
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
