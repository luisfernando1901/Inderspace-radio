import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private http: HttpClient) { }

  //Método para obtener las canciones por categoría
  async getSongsByCategory(category: string) {
    category = category.toLowerCase();
    let response = await this.http.get(`${environment.baseUrl}/getSongs/${category}`).toPromise();
    return response;
  }

  //Método para registrar el correo del usuario
  async registerEmail(email: string) {
    let send = {
      email: email
    };
    let response = await this.http.post(`${environment.baseUrl}/registerEmail`, send).toPromise();
    return response;
  }

  //Método para registrar nuevo usuario
  async registerUser(user: object) {
    let response = await this.http.post(`${environment.baseUrl}/registerUser`, user).toPromise();
    return response;
  }

  //Método para obtener los correos registrados
  async getRegisteredEmails() {
    let response:any = await this.http.get(`${environment.baseUrl}/getRegisteredEmails`).toPromise();
    return response;
  }
}
