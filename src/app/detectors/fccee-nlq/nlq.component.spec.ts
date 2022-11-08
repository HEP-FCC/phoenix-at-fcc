import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlqComponent } from './nlq.component';

describe('NlqComponent', () => {
  let component: NlqComponent;
  let fixture: ComponentFixture<NlqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
