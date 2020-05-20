import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CivildefenseMenuPage } from './civildefense-menu.page';

describe('CivildefenseMenuPage', () => {
  let component: CivildefenseMenuPage;
  let fixture: ComponentFixture<CivildefenseMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivildefenseMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CivildefenseMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
