import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DniCalculadora } from './dni-calculadora';

describe('DniCalculadora', () => {
  let component: DniCalculadora;
  let fixture: ComponentFixture<DniCalculadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DniCalculadora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DniCalculadora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
