import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    users: any = null;
    userForm: any = {
        user_id: null,
        username: null,
        password: null,
        user_email: null
    };
    constructor(private userServ: UserService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    async getUsers() {
        try {
            this.users = await this.userServ.getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    async submitUser() {
        try {
            if (!this.userForm.user_id) {
                // Create
                await this.userServ.createUser(this.userForm);
            } else {
                // Edit
                await this.userServ.editUser(this.userForm);
            }
            this.clearForm();
            this.getUsers();
        } catch (error) {
            console.log('submitUser.error: ', error);
        }
    }

    setEditForm(user) {
        this.userForm = user;
    }

    async deleteUser(userId) {
        try {
            await this.userServ.deleteUser(userId);
            this.getUsers();
        } catch (error) {
            console.log('deleteUser.error: ', error);
        }
    }

    clearForm() {
        this.userForm = {
            user_id: null,
            username: null,
            password: null,
            user_email: null
        };
    }

}
