import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private http: HttpClient) { }

  //Método para obtener las canciones por categoría
  async getSongsByCategory(category: string) {
    let response = await this.http.get(`http://localhost:3000/getSongs/${category}`).toPromise();
    return response;
  }
}
