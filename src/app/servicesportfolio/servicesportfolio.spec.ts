import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicesportfolio } from './servicesportfolio';

describe('Servicesportfolio', () => {
  let component: Servicesportfolio;
  let fixture: ComponentFixture<Servicesportfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicesportfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicesportfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
