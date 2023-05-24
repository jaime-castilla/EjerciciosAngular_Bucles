import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuclesForEj5Component } from './bucles-for-ej5.component';

describe('BuclesForEj5Component', () => {
  let component: BuclesForEj5Component;
  let fixture: ComponentFixture<BuclesForEj5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuclesForEj5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuclesForEj5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
