import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write-statement',
  templateUrl: './write-statement.page.html',
  styleUrls: ['./write-statement.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class WriteStatementPage implements OnInit {


  constructor(private router: Router) { }

  goHome() {
    this.router.navigateByUrl('/home');
  }
 ngOnInit() {}
}
