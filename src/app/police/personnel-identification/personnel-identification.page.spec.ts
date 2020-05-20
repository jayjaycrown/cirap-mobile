import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonnelIdentificationPage } from './personnel-identification.page';

describe('PersonnelIdentificationPage', () => {
  let component: PersonnelIdentificationPage;
  let fixture: ComponentFixture<PersonnelIdentificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelIdentificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnelIdentificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
