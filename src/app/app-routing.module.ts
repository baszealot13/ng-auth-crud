import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { AuthguardGuard } from './authguard.guard';
import { UnathenticationComponent } from './authentication/unathentication.component'; 

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    }, {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthguardGuard]
    }, {
        path: 'login',
        component: AuthenticationComponent
    }, {
        path: 'logout',
        component: UnathenticationComponent
    }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
