// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface User {
//   email: string;
//   password: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private usersUrl = 'assets/users.json'; 

//   constructor(private http: HttpClient) {}

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.usersUrl);
//   }

//   loginUser(email: string, password: string): Observable<boolean> {
//     return new Observable<boolean>((observer) => {
//       this.getUsers().subscribe((users) => {
//         const user = users.find(u => u.email === email && u.password === password);
//         if (user) {
//           observer.next(true); 
//         } else {
//           observer.next(false); 
//         }
//         observer.complete();
//       }, (error) => {
//         observer.error(error);
//       });
//     });
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'assets/users.json'; // URL to web api

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  loginUser(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.getUsers().subscribe((users) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          observer.next(true); // usuário autenticado
        } else {
          observer.next(false); // usuário não encontrado ou senha incorreta
        }
        observer.complete();
      }, (error) => {
        observer.error(error);
      });
    });
  }

  // Adiciona um novo usuário ao arquivo JSON
  registerUser(newUser: User): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.getUsers().subscribe((users) => {
        const userExists = users.some(u => u.email === newUser.email);
        if (!userExists) {
          users.push(newUser);
          // Simulação de gravação no arquivo JSON
          // Você precisa configurar um backend real para fazer a persistência de dados corretamente.
          this.saveUsers(users).subscribe(() => {
            observer.next(true); // usuário cadastrado com sucesso
            observer.complete();
          }, (error) => {
            observer.error(error);
          });
        } else {
          observer.next(false); // usuário já existe
          observer.complete();
        }
      }, (error) => {
        observer.error(error);
      });
    });
  }

  // Simulação de gravação no arquivo JSON (substitua isso por uma chamada real para o backend)
  private saveUsers(users: User[]): Observable<void> {
    // Aqui você deve implementar a chamada real para salvar os dados no backend
    return of(undefined); // Remova isso e adicione a implementação real
  }
}


