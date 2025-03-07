/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, OnInit } from '@angular/core';
import { IVendor } from '../../interfaces/IVendor';
import { VendorService } from '../../services/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors',
  standalone: false,
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.css'
})
export class VendorsComponent implements OnInit {
  public vendors!: IVendor[];

  constructor(
    private service: VendorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getAllVendors().subscribe(data => this.vendors = data);
  }

  addVendor(){
    this.router.navigate(["/add-vendor/"]);
  }

  showVendor(id:string){
    this.router.navigate(["/show-vendor/" + id]);
  }

  editVendor(id:string){
    this.router.navigate(["/edit-vendor/" + id]);
  }

  deleteVendor(id:string){
    this.router.navigate(["/delete-vendor/" + id]);
  }
}
