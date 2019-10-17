import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {}
  getAuthor(): any {
    return this.http.get('/authors');
  }
  addAuthor(newauthor): any {
    return this.http.post('/authors', newauthor);
  }
  getOneAuthor(id): any {
    return this.http.get('/authors/' + id);
  }
  editAuthor(editAuthor): any {
    return this.http.put('/authors/' + editAuthor._id, editAuthor);
  }
  deleteAuthor(id): any {
    return this.http.delete('/authors/' + id);
  }
}
