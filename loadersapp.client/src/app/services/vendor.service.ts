import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVendor } from '../interfaces/IVendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  _baseURL = "/api/loader";

  constructor(private http: HttpClient) { }

  getAllVendors()
  {
    return this.http.get<IVendor[]>(this._baseURL + "/LoadItems");
  }

  addVendor(vendor: IVendor)
  {
    return this.http.post(this._baseURL + "/InsertItem", vendor);
  }

  getVendorById(id:string) {
    return this.http.get<IVendor>(this._baseURL + "/LoadItem/" + id);
  }

  updateVendor(vendor: IVendor)
  {
    return this.http.put(this._baseURL + "/UpdateItem", vendor);
  }

  deleteVendor(id:string)
  {
    return this.http.delete(this._baseURL + "/DeleteItem/" + id);
  }

}
