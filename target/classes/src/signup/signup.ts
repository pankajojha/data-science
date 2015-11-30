import {CORE_DIRECTIVES, Component, View} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import {Http, Headers} from 'angular2/http';

//let styles   = require('./signup.css');
//let template = require('./signup.html');

@Component({
    selector: 'signup'
})
@View({
    directives: [ RouterLink, CORE_DIRECTIVES ],
   // templateUrl: './signup.html',
   // styleUrls: ['./signup.css'],
    template:`
         <div class="signup center-block jumbotron">
        <h1>Signup</h1>
        <form role="form" (submit)="signup($event, username.value, password.value)">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" #username class="form-control" id="username" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" #password class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
    `
})
export class Signup {

    constructor(public http: Http,public router: Router) {
    }

    signup(event, username, password) {
       this.http.post("http://xyzurl", JSON.stringify({username, password }));
    }


    login(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/login');
    }

}