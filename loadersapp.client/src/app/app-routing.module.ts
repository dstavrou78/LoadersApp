import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './components/vendors/vendors.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { DeleteVendorComponent } from './components/delete-vendor/delete-vendor.component';
import { EditVendorComponent } from './components/edit-vendor/edit-vendor.component';
import { ShowVendorComponent } from './components/show-vendor/show-vendor.component';

const routes: Routes = [
  { path: '', redirectTo: '/vendors', pathMatch: 'full' },
  { path: 'vendors', component: VendorsComponent },
  { path: 'add-vendor', component: AddVendorComponent },
  { path: 'edit-vendor/:id', component: EditVendorComponent },
  { path: 'delete-vendor/:id', component: DeleteVendorComponent },
  { path: 'show-vendor/:id', component: ShowVendorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
