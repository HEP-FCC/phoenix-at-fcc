import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AllegroComponent } from './allegro.component';

describe('AllegroComponent', () => {
  let component: AllegroComponent;
  let fixture: ComponentFixture<AllegroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AllegroComponent ],
      providers: [ provideHttpClient(), provideHttpClientTesting() ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
