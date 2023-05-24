import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuclesForEj3Component } from './bucles-for-ej3.component';

describe('BuclesForEj3Component', () => {
  let component: BuclesForEj3Component;
  let fixture: ComponentFixture<BuclesForEj3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuclesForEj3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuclesForEj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
