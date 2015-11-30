import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import {Http, Headers} from 'angular2/http';

//let styles = require('./home.css');
//let template = require('./home.html');


@Component({
    selector: 'home'
})
@View({
    directives: [CORE_DIRECTIVES],
    //templateUrl: './home.html',
   // styleUrls: ['./home.css'],
    template:
        `<div>
        <div class="home jumbotron centered">
        <h1>Welcome to the Home page!</h1>
       <!-- <h2 *ng-if="jwt">Your JWT is:</h2>
        <pre *ng-if="jwt" class="jwt"><code>{{ jwt }}</code></pre>
        <pre *ng-if="jwt" class="jwt"><code>{{ decodedJwt | json }}</code></pre>
        <p>Click any of the buttons to call an API and get a response</p>
        <p><a class="btn btn-primary btn-lg" role="button" (click)="callAnonymousApi()">Call Anonymous API</a></p>
        <p><a class="btn btn-primary btn-lg" role="button" (click)="callSecuredApi()">Call Secure API</a></p>
        <p><a class="btn btn-primary btn-lg" role="button" (click)="logout()">Logout</a></p>
        <h2 *ng-if="response">The response of calling the <span class="red">{{api}}</span> API is:</h2>
        <h3 *ng-if="response">{{response}}</h3>-->
    </div>
</div>`

})
export class Home {
    jwt:string;
    data:string;
    api:string;
    //http : Http;

    constructor(public http: Http, public router:Router) {
        this.jwt = localStorage.getItem('jwt');
        this.http = http;
    }

    logout() {
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    }

    _call(type, url) {
        const JSON_HEADERS = new Headers();
        JSON_HEADERS.append('Accept', 'application/json');
        JSON_HEADERS.append('Content-Type', 'application/json');
        this.api = type;

        this.http.get(url
        ).map(res => {
            //    this.data = res.json();
               this.serverData(res);
            }
        ).subscribe(
                err  => this.errorMessage(err),
            () => console.log('complete')
        );
    }

    serverData(data) {
        console.log('data', this.data);
        //this.router.navigateByUrl('home');
        this.data = data;
    }//serverData

    errorMessage(err) {
        console.info('just done');
        console.error(err);
    }

}