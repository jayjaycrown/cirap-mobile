import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicemenuPage } from './policemenu.page';

describe('PolicemenuPage', () => {
  let component: PolicemenuPage;
  let fixture: ComponentFixture<PolicemenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicemenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
