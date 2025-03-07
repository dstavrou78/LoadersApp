import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVendorComponent } from './show-vendor.component';

xdescribe('ShowVendorComponent', () => {
  let component: ShowVendorComponent;
  let fixture: ComponentFixture<ShowVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowVendorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
