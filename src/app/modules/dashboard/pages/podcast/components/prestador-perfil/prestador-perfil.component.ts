import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/shared/services/contentful.service';
import { Fields } from 'src/app/shared/models/prestadores.model';
@Component({
  standalone:true,
  imports:[
    CommonModule
  ],
  selector: 'app-prestador-perfil',
  templateUrl: './prestador-perfil.component.html',
  styleUrls: ['./prestador-perfil.component.scss']
})
export class PrestadorPerfilComponent {
  prestador : any;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.contentfulService.getPrestadoresBySlug(slug).then(prestador => {
        this.prestador = prestador.fields;
        // console.log(noticia);
        
      });
    });
  }

  contactarPrestador(contacto: string) {
    const whatsappUrl = `https://wa.me/${contacto}`;
    window.open(whatsappUrl, '_blank');
  }


  ligarParaPrestador(contacto: string) {
    const telefoneUrl = `tel:${contacto}`;
    window.location.href = telefoneUrl;
  }
  // prestador: any = null;

  // constructor(
  //   private route: ActivatedRoute,
  //   private contentfulService: ContentfulService
  // ) {}

  // ngOnInit() {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.contentfulService.getPrestador(id)
  //       .then(prestador => this.prestador = prestador)
  //       .catch(error => console.error('Error fetching prestador:', error));
  //   }
  // }
  

}
