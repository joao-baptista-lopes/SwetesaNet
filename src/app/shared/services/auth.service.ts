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
  private usersUrl = 'http://localhost:3000/users'; // Atualize a URL para apontar para o json-server

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  addUser(newUser: User): Observable<boolean> {
    return this.getUsers().pipe(
      map(users => {
        const userExists = users.some(user => user.email === newUser.email);
        if (userExists) {
          return false; // Usuário já existe
        } else {
          // Enviar uma solicitação POST para adicionar o novo usuário
          this.http.post<User>(this.usersUrl, newUser).subscribe({
            next: (response) => console.log('Usuário adicionado:', response),
            error: (error) => console.error('Erro ao adicionar usuário:', error)
          });
          return true;
        }
      })
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        return !!user; // Retorna true se o usuário for encontrado
      })
    );
  }
}


