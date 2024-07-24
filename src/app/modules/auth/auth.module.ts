import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [AuthRoutingModule, FormsModule, HttpClientModule, AngularSvgIconModule.forRoot()],
})
export class AuthModule {}
