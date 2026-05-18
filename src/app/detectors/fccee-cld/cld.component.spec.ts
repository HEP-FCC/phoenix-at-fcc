import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CldComponent } from './cld.component';

describe('CldComponent', () => {
  let component: CldComponent;
  let fixture: ComponentFixture<CldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
