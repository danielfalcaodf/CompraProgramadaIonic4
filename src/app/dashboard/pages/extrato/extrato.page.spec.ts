import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExtratoPage } from './extrato.page';

describe('ExtratoPage', () => {
  let component: ExtratoPage;
  let fixture: ComponentFixture<ExtratoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExtratoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
