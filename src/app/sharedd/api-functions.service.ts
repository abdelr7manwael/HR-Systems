import { HttpClient } from '@angular/common/http';
import { Inject , Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<T> {
// ConfigUrl='http://localhost:3000/employee';
  constructor(@Inject(String) public ConfigUrl : string ,public http:HttpClient ) { }

  get():Observable<T>{
    return this.http.get<T>(this.ConfigUrl);
  }

  getById(id):Observable<T>{
    return this.http.get<T>(this.ConfigUrl + `/${id}`);
  }

  post(object):Observable<T>{
    return this.http.post<T>(this.ConfigUrl,object);
  }
  delete(id):Observable<T>{
    return this.http.delete<T>(this.ConfigUrl + `/${id}`);
  }

  put(object , id):Observable<T>{
    return this.http.put<T>(this.ConfigUrl + `/${id}` ,object);
  }


}
