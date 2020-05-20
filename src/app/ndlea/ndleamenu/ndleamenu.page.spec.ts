import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NdleamenuPage } from './ndleamenu.page';

describe('NdleamenuPage', () => {
  let component: NdleamenuPage;
  let fixture: ComponentFixture<NdleamenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdleamenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NdleamenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
