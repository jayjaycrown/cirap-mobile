import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WantedListPage } from './wanted-list.page';

describe('WantedListPage', () => {
  let component: WantedListPage;
  let fixture: ComponentFixture<WantedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantedListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WantedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
