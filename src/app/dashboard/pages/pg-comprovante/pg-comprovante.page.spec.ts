import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PgComprovantePage } from './pg-comprovante.page';

describe('PgComprovantePage', () => {
  let component: PgComprovantePage;
  let fixture: ComponentFixture<PgComprovantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgComprovantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PgComprovantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
