import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { VendorService } from './services/vendor.service';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { EditVendorComponent } from './components/edit-vendor/edit-vendor.component';
import { DeleteVendorComponent } from './components/delete-vendor/delete-vendor.component';
import { ShowVendorComponent } from './components/show-vendor/show-vendor.component';

@NgModule({
  declarations: [
     AppComponent,
     VendorsComponent,
     AddVendorComponent,
     EditVendorComponent,
     DeleteVendorComponent,
     ShowVendorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
