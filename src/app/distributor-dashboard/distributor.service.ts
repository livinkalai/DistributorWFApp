import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sampleDistributorsData } from '../data/distributors-data';

@Injectable()
export class DistributorService {

  constructor() {

  }

  GetDistributorsOrderData(): any {
    return sampleDistributorsData;
  }
}
