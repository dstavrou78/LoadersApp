/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrl: './add-vendor.component.css',
  standalone: false,
})

export class AddVendorComponent implements OnInit {

  addVendorForm: FormGroup;
  showError = false;
  errorMsg = "";

  constructor(
    private service: VendorService,
    private formBuilder: FormBuilder,
    private router: Router
  )
  {

  }

  ngOnInit() {
    this.addVendorForm = this.formBuilder.group(
      {
        id:[null, Validators.required],
        name:[null, Validators.required],
        address:[null]
      }
    )
  }

  onSubmit()
  {
    this.service.addVendor(this.addVendorForm.value)
                .subscribe({ next: () => { this.router.navigate(["/vendors"]); },
                             error: (err) => { this.errorMsg = (typeof err.error === "string") ? err.error : err.message;
                                               this.showError = true;
                                              }
                            })
  }
}
