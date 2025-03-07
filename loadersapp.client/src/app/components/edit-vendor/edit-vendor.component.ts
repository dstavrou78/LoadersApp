/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../services/vendor.service';
import { IVendor } from '../../interfaces/IVendor';

@Component({
  selector: 'app-edit-vendor',
  standalone: false,
  templateUrl: './edit-vendor.component.html',
  styleUrl: './edit-vendor.component.css'
})

export class EditVendorComponent implements OnInit {

  editVendorForm: FormGroup;
  vendor: IVendor;
  showError = false;
  errorMsg = "";

constructor(
    private service: VendorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  )
  {

  }

  ngOnInit() {

    this.service.getVendorById(this.route.snapshot.params['id'])
                .subscribe({ next: (data) => { this.vendor = data;

                                                this.editVendorForm = this.formBuilder.group(
                                                  {
                                                    id:[data.id, Validators.required],
                                                    name:[data.name, Validators.required],
                                                    address:[data.address]
                                                  }
                                                )
                                              },
                            error: (err) => {
                              this.errorMsg = (typeof err.error === "string") ? err.error : err.message;
                              this.showError = true; },
                            });
    this.editVendorForm.get('id')?.disable();
  }

  onSubmit()
  {
    this.service.updateVendor(this.editVendorForm.value)
                .subscribe({next: () => { this.router.navigate(["/vendors"]); },
                            error: (err) => { this.errorMsg = err.message ? err.message : err.error;
                                                     this.showError = true;
                                                   }
    })
  }
}
