import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilTerapeutaPage } from './perfil-terapeuta.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilTerapeutaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilTerapeutaPage]
})
export class PerfilTerapeutaPageModule {}
