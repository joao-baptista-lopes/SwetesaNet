import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Route, RouterLink, RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/shared/services/contentful.service';
import { Fields } from 'src/app/shared/models/noticias.model';
@Component({
  selector: 'app-notica-especifica',
  standalone: true,
  imports: [ RouterLink,
    RouterLinkActive,
  CommonModule],
  templateUrl: './notica-especifica.component.html',
  styleUrl: './notica-especifica.component.scss'
})
export class NoticaEspecificaComponent implements OnInit {

  // noticia!: Entry<any>;
  noticia: any;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.contentfulService.getNoticiaBySlug(slug).then(noticia => {
        this.noticia = noticia.fields;
        // console.log(noticia);
        
      });
    });
  }

}
