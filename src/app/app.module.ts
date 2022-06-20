import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { MatGridListModule  } from '@angular/material/grid-list'
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from "@progress/kendo-angular-dialog";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistributorDashboardComponent } from './distributor-dashboard/distributor-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DistributorService } from './distributor-dashboard/distributor.service';

@NgModule({
  declarations: [
    AppComponent,
    DistributorDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MatGridListModule
    GridModule,
    DialogsModule,
    FormsModule
  ],
  providers: [DistributorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
