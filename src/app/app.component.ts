import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';
import { filter } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ng-auth-crud-ttr';
    isAuthed: boolean = false;

    constructor(private router: Router, private authServ: AuthenticationService) {}

    ngOnInit() {
        this.router.events.pipe(filter(value => value instanceof NavigationEnd))
            .subscribe(() => this.isAuthed = this.authServ.loggedIn());
    }
}
