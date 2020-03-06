import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContratoPage } from './contrato.page';

describe('ContratoPage', () => {
  let component: ContratoPage;
  let fixture: ComponentFixture<ContratoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContratoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
