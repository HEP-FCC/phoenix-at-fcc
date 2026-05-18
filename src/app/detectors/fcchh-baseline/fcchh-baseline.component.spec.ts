import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcchhBaselineComponent } from './fcchh-baseline.component';

describe('FcchhBaselineComponent', () => {
  let component: FcchhBaselineComponent;
  let fixture: ComponentFixture<FcchhBaselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcchhBaselineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcchhBaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
