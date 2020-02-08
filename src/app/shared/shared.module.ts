import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
    exports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule]
})
export class SharedModule { }
