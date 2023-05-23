import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuclesForEj1Component } from './bucles-for-ej1.component';

describe('BuclesForEj1Component', () => {
  let component: BuclesForEj1Component;
  let fixture: ComponentFixture<BuclesForEj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuclesForEj1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuclesForEj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
