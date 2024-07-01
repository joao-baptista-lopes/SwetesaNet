import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContentfulService } from 'src/app/shared/services/contentful.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [ RouterLink,
    RouterLinkActive,
  CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent implements OnInit {

  noticias: any[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getNoticias()
      .then(noticias => {
        this.noticias = noticias;
        console.log(this.noticias);
      })
      .catch(error => console.error('Error fetching noticias:', error.message));
  }

}
