import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuclesForEj8Component } from './bucles-for-ej8.component';

describe('BuclesForEj8Component', () => {
  let component: BuclesForEj8Component;
  let fixture: ComponentFixture<BuclesForEj8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuclesForEj8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuclesForEj8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
