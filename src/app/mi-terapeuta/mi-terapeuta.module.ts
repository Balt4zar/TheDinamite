import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiTerapeutaPage } from './mi-terapeuta.page';

const routes: Routes = [
  {
    path: '',
    component: MiTerapeutaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiTerapeutaPage]
})
export class MiTerapeutaPageModule {}
