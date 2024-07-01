import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentfulService } from 'src/app/shared/services/contentful.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-prestador',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cadastro-prestador.component.html',
  styleUrl: './cadastro-prestador.component.scss'
})
export class CadastroPrestadorComponent {
  constructor(private contentfulService: ContentfulService) {}

  onSubmit(form: any) {
    const prestador = {
      nome: form.value.nome,
      profissao: form.value.profissao,
      contacto: form.value.contacto
    };

    this.contentfulService.createPrestador(prestador)
      .then(response => {
        console.log('Prestador criado com sucesso:', response);
        alert('Prestador Criado com sucesso')
      })
      .catch(error => {
        console.error('Erro ao criar prestador:', error);
      });
  }
}
