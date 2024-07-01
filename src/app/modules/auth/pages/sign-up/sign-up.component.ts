// import { Component, OnInit } from '@angular/core';
// import { AngularSvgIconModule } from 'angular-svg-icon';
// import { RouterLink } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { ButtonComponent } from 'src/app/shared/components/button/button.component';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss'],
//   standalone: true,
//   imports: [FormsModule, RouterLink, AngularSvgIconModule, ButtonComponent],
// })
// export class SignUpComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}
// }

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService, User } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  registerError: boolean = false;
  registerSuccess: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const newUser: User = { email: this.email, password: this.password };
    this.authService.registerUser(newUser).subscribe(
      (registered) => {
        if (registered) {
          // Redirecionar para a página de login após o cadastro bem-sucedido
          this.registerSuccess = true;
          this.router.navigate(['/login']);
        } else {
          // Exibir mensagem de erro
          this.registerError = true;
        }
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
        this.registerError = true; // Exibir mensagem de erro em caso de erro na requisição
      }
    );
  }
}

