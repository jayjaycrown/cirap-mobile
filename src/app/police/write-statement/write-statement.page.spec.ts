import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WriteStatementPage } from './write-statement.page';

describe('WriteStatementPage', () => {
  let component: WriteStatementPage;
  let fixture: ComponentFixture<WriteStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteStatementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WriteStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
