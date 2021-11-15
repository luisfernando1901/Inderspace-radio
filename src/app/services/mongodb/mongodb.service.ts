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
}
