import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService
  ) { }

  login(email: string, password: string) {
    return this.http.post('http://recipes.test/api/auth/login', 
      {email, password}
    ).pipe(
      tap(
        token => {
          this.storage.setItem('token', token)
          .then(
            () => {
              console.log('BERJAYA!!');
            },
            error => console.error('Error login', error)
          );
        }
      )
    )
  }
}
