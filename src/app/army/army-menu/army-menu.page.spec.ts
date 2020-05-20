import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmyMenuPage } from './army-menu.page';

describe('ArmyMenuPage', () => {
  let component: ArmyMenuPage;
  let fixture: ComponentFixture<ArmyMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmyMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmyMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
