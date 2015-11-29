
import {bind, bootstrap} from 'angular2/angular2';
/*
 * Bindings provided by Angular
 */
import {FORM_BINDINGS, ELEMENT_PROBE_BINDINGS} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';

/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View} from 'angular2/angular2';
//import {RouteConfig, Router, RouterOutlet} from 'angular2/router';
import {Location, RouteConfig, RouterLink, Router, RouterOutlet} from 'angular2/router';
import {Http, Headers} from 'angular2/http';
/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {LoggedInRouterOutlet} from './app/LoggedInOutlet';
import {Home} from './home/home';
import {Login} from './login/login';
import {Signup} from './signup/signup';

@Component({
  selector: 'ds-app'
})

@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, Login, Home, Signup, LoggedInRouterOutlet]
})


@RouteConfig([
  { path: '/',       redirectTo: '/home' },
  { path: '/home',   as: 'Home',   component: Home },
  { path: '/login',  as: 'Login',  component: Login },
  { path: '/signup', as: 'Signup', component: Signup }
])
//@Injectable()
class App {
  // These are member type
  title: string;
  constructor( public router: Router) {
    console.log("Loaded .... initial ....");
    this.title = 'Data Science ';

    /*router
        .config('/home', Home)
        .then(() => router.config('/login', Login))
        .then(() => router.navigate('/home'));*/
  }

}

bootstrap(App, [
// These are dependencies of our App
//routerBindings(QcApp),
  FORM_BINDINGS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ELEMENT_PROBE_BINDINGS
]).then(app => {
  console.log("Bootstrap successful ", app);
}, err => {
    console.error(" PANKAJ this is error ", err);
  }
  );;

//tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
