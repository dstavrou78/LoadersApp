/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, OnInit } from '@angular/core';
import { IVendor } from '../../interfaces/IVendor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-delete-vendor',
  standalone: false,
  templateUrl: './delete-vendor.component.html',
  styleUrl: './delete-vendor.component.css'
})
export class DeleteVendorComponent implements OnInit {
  vendor: IVendor;

constructor(
  private service: VendorService,
  private route: ActivatedRoute,
  private router: Router
)
{

}

ngOnInit() {
  this.service.getVendorById(this.route.snapshot.params['id'])
              .subscribe(data => this.vendor = data);
}

deleteVendor(id:string) {
  this.service.deleteVendor(id)
              .subscribe(() => this.router.navigate(["/vendors"]));
}
}
