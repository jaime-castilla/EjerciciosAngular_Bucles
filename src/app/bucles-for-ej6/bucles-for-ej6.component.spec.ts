import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuclesForEj6Component } from './bucles-for-ej6.component';

describe('BuclesForEj6Component', () => {
  let component: BuclesForEj6Component;
  let fixture: ComponentFixture<BuclesForEj6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuclesForEj6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuclesForEj6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
