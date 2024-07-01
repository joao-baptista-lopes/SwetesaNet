import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Content } from 'src/app/shared/models/Content';
import { ResponseContent } from 'src/app/shared/models/ResponseContent';
import { Prestador } from 'src/app/shared/models/prestador.model';
import { ContentfulService } from 'src/app/shared/services/contentful.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { PrestadoresService } from 'src/app/shared/services/prestadores.service';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-podcast-banner',
  standalone: true,
  imports:[
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ModalComponent
  ],
  templateUrl: './podcast-banner.component.html',
  styleUrl: './podcast-banner.component.scss'
})
export class PodcastBannerComponent implements OnInit  {
  prestadores : Prestador[]=[]

  entries: any[] = [];

  constructor(private contentfulService: ContentfulService, private modalService : ModalService) { }

  ngOnInit(): void {
    const contentTypeId = 'prestador'; // Substitua pelo ID do content type correto
    this.contentfulService.getEntries(contentTypeId)
      .then(entries => {
        this.entries = entries;
        console.log(this.entries);
      })
      .catch(error => console.error('Error fetching entries:', error));
      }
      
      abrirModal(prestador: Prestador) {
        this.modalService.abrirModal(prestador);
      }

  // prestadores: Content<PrestadoresModel>[]=[];

  // constructor(private servicoPrestadores: PrestadoresService){}

  // ngOnInit(): void {

  //   this.getPrestadores()
      
  // }

  // getPrestadores(){
  //   this.servicoPrestadores.getPrestadores().subscribe(response =>{
  //     this.prestadores = response.items
  //   })
  // }



}
