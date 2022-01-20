import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PassengarDashboardComponent } from "./containers/passenger-dashboard/passengar-dashboard.component";
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
    declarations: [
        PassengarDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [CommonModule],
    exports: [PassengarDashboardComponent]
})
export class PassengerDashboardModule {}