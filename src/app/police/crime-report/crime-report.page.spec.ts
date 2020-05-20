import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrimeReportPage } from './crime-report.page';

describe('CrimeReportPage', () => {
  let component: CrimeReportPage;
  let fixture: ComponentFixture<CrimeReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrimeReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
