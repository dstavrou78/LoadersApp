import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendorComponent } from './edit-vendor.component';

xdescribe('EditVendorComponent', () => {
  let component: EditVendorComponent;
  let fixture: ComponentFixture<EditVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditVendorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
