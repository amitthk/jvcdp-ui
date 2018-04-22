import { RouterModule, Routes } from '@angular/router';

import { BucketSummaryComponent } from './bucket-summary/bucket-summary.component';
import { BucketObjectsComponent } from './bucket-objects/bucket-objects.component';

export const BucketManagerRoutes: Routes = [
    { path: 'buckets', redirectTo: 'bucketsummary', pathMatch: 'full' },
    { path: 'bucketsummary', component: BucketSummaryComponent},
    { path: 'bucketobjects', component: BucketObjectsComponent}];