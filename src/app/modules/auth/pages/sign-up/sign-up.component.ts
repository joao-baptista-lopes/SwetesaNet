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
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports:[FormsModule, CommonModule]
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  registerError: boolean = false;
  registerSuccess: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  private isPasswordValid(password: string): boolean {
    const regex = /^BP-[A-Z0-9]{8}$/;
    return regex.test(password);
  }

  onSubmit(): void {
    if (!this.isPasswordValid(this.password)) {
      this.registerError = true;
      this.registerSuccess = false;
      return;
    }

    const newUser: User = { email: this.email, password: this.password };
    this.authService.addUser(newUser).subscribe(
      (registered) => {
        if (registered) {
          this.registerSuccess = true;
          this.registerError = false;
        } else {
          this.registerError = true;
          this.registerSuccess = false;
        }
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
        this.registerError = true;
        this.registerSuccess = false;
      }
    );
  }
}
