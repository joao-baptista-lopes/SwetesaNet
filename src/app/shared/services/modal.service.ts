import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Prestador } from '../models/prestador.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private prestadorSelecionadoSubject = new BehaviorSubject<Prestador | null>(null);
  prestadorSelecionado$ = this.prestadorSelecionadoSubject.asObservable();

  abrirModal(prestador: Prestador) {
    this.prestadorSelecionadoSubject.next(prestador);
  }

  fecharModal() {
    this.prestadorSelecionadoSubject.next(null);
  }
}
