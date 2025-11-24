import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chooseus } from './chooseus';

describe('Chooseus', () => {
  let component: Chooseus;
  let fixture: ComponentFixture<Chooseus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chooseus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chooseus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
