import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuclesForEj2Component } from './bucles-for-ej2.component';

describe('BuclesForEj2Component', () => {
  let component: BuclesForEj2Component;
  let fixture: ComponentFixture<BuclesForEj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuclesForEj2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuclesForEj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
