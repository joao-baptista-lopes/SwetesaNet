import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (authenticated) => {
        if (authenticated) {
          // Redirecionar para a página de dashboard após a autenticação bem-sucedida
          this.router.navigate(['/dashboard']);
        } else {
          // Exibir mensagem de erro
          this.loginError = true;
        }
      },
      (error) => {
        console.error('Erro ao autenticar usuário', error);
        this.loginError = true; // Exibir mensagem de erro em caso de erro na requisição
      }
    );
  }
}
