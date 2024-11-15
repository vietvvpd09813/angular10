import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdproductsComponent } from './adproducts.component';

describe('AdproductsComponent', () => {
  let component: AdproductsComponent;
  let fixture: ComponentFixture<AdproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
