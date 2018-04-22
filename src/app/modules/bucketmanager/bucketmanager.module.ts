import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BucketSummaryComponent } from './bucket-summary/bucket-summary.component';
import { BucketObjectsComponent } from './bucket-objects/bucket-objects.component';

import { BucketManagerRoutes } from './bucketmanager-routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
        RouterModule.forChild(BucketManagerRoutes)

  ],
  declarations: [BucketSummaryComponent, BucketObjectsComponent]
})
export class BucketManagerModule { }
