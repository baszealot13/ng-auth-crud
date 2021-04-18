import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(`${environment.apiHost}/api/users`).toPromise();
    }

    createUser(data) {
        return this.http.post(`${environment.apiHost}/api/user`, data).toPromise();
    }

    editUser(data) {
        return this.http.put(`${environment.apiHost}/api/user/${data.user_id}`, data).toPromise();
    }

    deleteUser(userId) {
        return this.http.delete(`${environment.apiHost}/api/user/${userId}`).toPromise();
    }
}
