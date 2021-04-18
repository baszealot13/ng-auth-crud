import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(data) {
        return this.http.post<{ token: string }>(`${environment.apiHost}/login`, data).toPromise()
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }
}
