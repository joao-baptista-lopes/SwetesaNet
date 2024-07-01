import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/users.json';

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
          users.push(newUser);
          // Aqui simulamos a escrita no arquivo JSON
          // Em uma aplicação real, você enviaria isso a um servidor
          console.log('Usuário adicionado:', newUser);
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
