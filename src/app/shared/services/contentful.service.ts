import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Entry, ContentfulClientApi } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client: ContentfulClientApi<any>;

  constructor() {
    this.client = contentful.createClient({
      space: 'ze4hzdh065gy',
      accessToken: 'O9VOrGApUGWg-T8T7Pa3CWQR_Ck2nTGOhBc2zpcDwm4'
    });
  }

  getEntries(contentType: string) {
    return this.client.getEntries({
      content_type: contentType
    })
    .then(response => response.items)
    .catch(error => {
      console.error('Error fetching entries:', error);
      throw error;  
    });
  }

  getPrestador(id: string) {
    return this.client.getEntry(id)
      .then(entry => entry.fields)
      .catch(error => {
        console.error('Error fetching entry:', error.message);
        throw error;
      });
  }

  getNoticias() {
    return this.getEntries('notcias'); 
  }

  private managementClient = createManagementClient({
    accessToken: 'CFPAT-kjr6pCtp7oUr-H8ZTwVFznR-CuHFoku11akc5OSLv_U'
  });



  createPrestador(prestador: any) {
    return this.managementClient.getSpace('ze4hzdh065gy')
      .then(space => space.getEnvironment('master'))
      .then(environment => environment.createEntry('prestador', {
        fields: {
          nome: { 'en-US': prestador.nome },
          profissao: { 'en-US': prestador.profissao },
          descricao: {'en-US': prestador.descricao},
          contacto: {'en-US': prestador.contacto},
          slug: {'en-US': prestador.slug}
        }
      }))
      .then(entry => entry.publish())
      .catch(error => {
        console.error('Error creating entry:', error.message);
        throw error;
      });
  }

  async authenticateUser(email: string, password: string): Promise<boolean> {
    try {
      const response = await this.client.getEntries({
        content_type: 'user',
        'fields.email': email,
        'fields.password': password 
      });
      return response.items.length > 0;
    } catch (error) {
      console.error('Error authenticating user:', error);
      throw error;
    }
  }

  async getUserByEmail(email: string): Promise<Entry<any>> {
    const response = await this.client.getEntries({
      content_type: 'user',
      'fields.email': email,
    });
    return response.items[0];
  }

  // Pegar as notícias pelo slug
  getNoticiaBySlug(slug: string) {
    return this.client.getEntries({
      content_type: 'notcias',
      'fields.slug': slug
    })
    .then(response => response.items[0])
    .catch(error => {
      console.error('Error fetching entry by slug:', error.message);
      throw error;
    });
  }

  getPrestadoresBySlug(slug: string) {
    return this.client.getEntries({
      content_type: 'prestador',
      'fields.slug': slug
    })
    .then(response => response.items[0])
    .catch(error => {
      console.error('Error fetching entry by slug:', error.message);
      throw error;
    });
  }

  // async createUser(user: { email: string; password: string }): Promise<Entry<any>> {
  //   const response = await this.managementClient.getSpace('ze4hzdh065gy')
  //     .then(space => space.createEntry('user', {
  //       fields: {
  //         email: { 'en-US': user.email },
  //         password: { 'en-US': user.password }, // Novamente, hash a senha antes de armazenar
  //       },
  //     }))
  //     .catch(error => {
  //       console.error('Error creating user:', error.message);
  //       throw error;
  //     });
  //   return response;
  // }
}
