import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Distributor, Order, Status } from '../models/distributor';
import { DistributorService } from './distributor.service';

@Component({
  selector: 'distributor-dashboard',
  templateUrl: './distributor-dashboard.component.html',
  styleUrls: ['./distributor-dashboard.component.css']
})
export class DistributorDashboardComponent implements OnInit {
  distributors: Distributor[] = [];
  showInProgressDialog: boolean = false;
  showCompleteDialog: boolean = false;
  tempData: any = { inprogressTextVal: null, inprogressFileVal: null, isCompleteChecked: false, fileToUpload: File }
  selectedOrderInfo: Order = null;

  constructor(private distributorService: DistributorService) { }

  ngOnInit(): void {
    this.distributors = this.distributorService.GetDistributorsOrderData();
  }

  //#region - Private Methods
  getOrderInfoById(distributor: any, ColID: number) {
    if (distributor) {
      if (!distributor.OrdersInfo) {
        distributor.OrdersInfo = [];
      }
      let orderInfo = distributor.OrdersInfo.find(item => item.ID == ColID);
      if (!orderInfo) {
        orderInfo = { ID: ColID, Status: Status.Open };
        distributor.OrdersInfo.push(orderInfo);
      }
      return orderInfo;
    }
  }

  getStatusClass(distributor: any, ColID: number) {
    let orderInfo: any = this.getOrderInfoById(distributor, ColID);
    let status: any = {};
    if (orderInfo) {
      status = orderInfo.Status;
    }
    return status == Status.Completed ? "completed" : status == Status.InProgress ? "inprogress" : "open";
  }

  resetHelperValues() {
    this.showInProgressDialog = false;
    this.showCompleteDialog = false;
    this.selectedOrderInfo = null;
    this.tempData.isCompleteChecked = false;
  }
  //#endregion

  //#region - UI Events
  onDblClickStatusBtn(distributor: any, ColID: number) {
    let orderInfo: any = this.getOrderInfoById(distributor, ColID);
    if (orderInfo) {
      this.selectedOrderInfo = orderInfo;
      if (orderInfo.Status == Status.Open)
        this.showInProgressDialog = true;
      else if (orderInfo.Status == Status.InProgress)
        this.showCompleteDialog = true;
    }
  }

  closeDialog(toStatus?: string) {
    if (this.selectedOrderInfo && toStatus) {
      if (toStatus == 'inprogress' && this.selectedOrderInfo.Status == Status.Open)
        this.selectedOrderInfo.Status = Status.InProgress;
      if (toStatus == 'completed' && this.tempData.isCompleteChecked && this.selectedOrderInfo.Status == Status.InProgress) {
        this.selectedOrderInfo.Status = Status.Completed;
      }
    }
    this.resetHelperValues();
  }

  handleFileInput(target: any) {
    let files: FileList = target.files;
    if (files)
      this.tempData.fileToUpload = files.item(0);
  }
  //#endregion
}
