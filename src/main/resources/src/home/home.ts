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
    templateUrl: './home.html',
    styleUrls: ['./home.css']
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