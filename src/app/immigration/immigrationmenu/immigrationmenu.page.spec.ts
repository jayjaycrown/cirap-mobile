import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImmigrationmenuPage } from './immigrationmenu.page';

describe('ImmigrationmenuPage', () => {
  let component: ImmigrationmenuPage;
  let fixture: ComponentFixture<ImmigrationmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmigrationmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImmigrationmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
