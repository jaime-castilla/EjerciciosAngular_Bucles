import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuclesForEj4Component } from './bucles-for-ej4.component';

describe('BuclesForEj4Component', () => {
  let component: BuclesForEj4Component;
  let fixture: ComponentFixture<BuclesForEj4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuclesForEj4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuclesForEj4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
