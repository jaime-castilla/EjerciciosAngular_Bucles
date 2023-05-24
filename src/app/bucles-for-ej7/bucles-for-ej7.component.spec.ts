import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuclesForEj7Component } from './bucles-for-ej7.component';

describe('BuclesForEj7Component', () => {
  let component: BuclesForEj7Component;
  let fixture: ComponentFixture<BuclesForEj7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuclesForEj7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuclesForEj7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
