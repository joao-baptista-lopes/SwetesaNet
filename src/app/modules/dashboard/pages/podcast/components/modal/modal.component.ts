import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Prestador } from 'src/app/shared/models/prestador.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

}
