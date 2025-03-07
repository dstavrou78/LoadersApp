/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, OnInit } from '@angular/core';
import { IVendor } from '../../interfaces/IVendor';
import { VendorService } from '../../services/vendor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-vendor',
  standalone: false,
  templateUrl: './show-vendor.component.html',
  styleUrl: './show-vendor.component.css'
})
export class ShowVendorComponent implements OnInit {
  vendor: IVendor;

constructor(
  private service: VendorService,
  private route: ActivatedRoute
)
{

}
  ngOnInit() {
    this.service.getVendorById(this.route.snapshot.params['id']).subscribe(data => this.vendor = data);
  }
}
