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
      title: 'Personnel Identification',
      url: '/ndleamenu/personnel-search'
    },
    {
      title: 'Report Personnel',
      url: '/ndleamenu/report-personnel'
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
