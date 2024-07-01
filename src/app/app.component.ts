import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { ContentfulService } from './shared/services/contentful.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, RouterOutlet, ResponsiveHelperComponent],
})
export class AppComponent  {

  // prestadores$! : Observable<any>;
  title = 'SwetesaNet';

  constructor(public themeService: ThemeService,
    // private contentful : ContentfulService
  ) {}

  // ngOnInit(){
  //   this.contentful.logContent('ze4hzdh065gy')
  //   this.prestadores$ = this.contentful.getContent('ze4hzdh065gy')
  // }
}
