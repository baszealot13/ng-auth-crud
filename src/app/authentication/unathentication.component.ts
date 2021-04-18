import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'app-unathentication',
    templateUrl: './unathentication.component.html',
    styleUrls: ['./unathentication.component.scss']
})
export class UnathenticationComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }

}
