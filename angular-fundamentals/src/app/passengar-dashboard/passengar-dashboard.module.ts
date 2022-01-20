import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PassengarDashboardComponent } from "./containers/passenger-dashboard/passengar-dashboard.component";

@NgModule({
    declarations: [
        PassengarDashboardComponent
    ],
    imports: [CommonModule],
    exports: [PassengarDashboardComponent]
})
export class PassengerDashboardModule {}