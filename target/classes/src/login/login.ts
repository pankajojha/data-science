import {Component, View} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import {Http, Headers} from 'angular2/http';


//let template = require('./login.html');

@Component({
    selector: 'login'
})

@View({
    // templateUrl: './login.html?v=<%= VERSION %>',
    template: `
            <div class="login center-block">
            <h1>Login</h1>
            <form role="form" (submit)="login($event, username.value, password.value)">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" #username class="form-control" id="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" #password class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
                <a href="/signup">Click here to Signup</a>
            </form>
        </div>`,
    directives: [RouterLink]
  //  styleUrls: ['./login.css']

})
export class Login {
    BASE_URL = 'http://localhost:9999';
    APP_URL = '/user/validate';
    data:string;

    constructor(public http:Http, public router:Router) {

    }


    signup(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    }

    login() {
        this.http.post(this.BASE_URL
            body: JSON.stringify({
                username, password
            })
        ).map(res => {
                /* this.data = res.json();*/
                this.serverData(res);
            }
        ).subscribe(
                err  => this.errorMessage(err),
            // onComplete callback
            () => console.log('complete')
        );
    }

    serverData(data) {
        console.log('data', this.data);
        //localStorage.setItem('jwt', response.id_token);
        this.router.navigateByUrl('home');
        //  this.data = data;
    }//serverData

    errorMessage(err) {
        console.info(`got it `);
        console.error(err);
    }

    /*login(event, username, password) {
     event.preventDefault();
     window.fetch('http://localhost:9999/sessions/create', {
     method: 'POST',
     headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
     },
     body: JSON.stringify({
     username, password
     })
     })
     .then(status)
     .then(json)
     .then((response:any) => {
     localStorage.setItem('jwt', response.id_token);
     this.router.parent.navigateByUrl('/home');
     })
     .catch((error) => {
     alert(error.message);
     console.log(error.message);
     });
     }*/
}