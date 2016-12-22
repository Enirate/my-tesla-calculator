import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//service
import { BatteryService } from './tesla-battery.service';

//Module
@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        ReactiveFormsModule
    ],
    providers:[
        BatteryService
    ],
    exports:[]
})

export class TeslaBatteryModule {}