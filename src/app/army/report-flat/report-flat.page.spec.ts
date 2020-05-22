import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportFlatPage } from './report-flat.page';

describe('ReportFlatPage', () => {
  let component: ReportFlatPage;
  let fixture: ComponentFixture<ReportFlatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFlatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportFlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
