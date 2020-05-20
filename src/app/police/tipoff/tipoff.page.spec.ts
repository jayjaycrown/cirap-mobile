import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipoffPage } from './tipoff.page';

describe('TipoffPage', () => {
  let component: TipoffPage;
  let fixture: ComponentFixture<TipoffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipoffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
