import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissingPersonsPage } from './missing-persons.page';

describe('MissingPersonsPage', () => {
  let component: MissingPersonsPage;
  let fixture: ComponentFixture<MissingPersonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPersonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissingPersonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
