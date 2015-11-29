var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/tsd.d.ts"/>
// Angular 2
var angular2_1 = require('angular2/angular2');
/*
 * Bindings provided by Angular
 */
var angular2_2 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
/*
 * Angular 2 decorators and services
 */
var angular2_3 = require('angular2/angular2');
var router_2 = require('angular2/router');
var http_2 = require('angular2/http');
/*
 * Angular Directives
 */
var angular2_4 = require('angular2/angular2');
var router_3 = require('angular2/router');
var qc_home_1 = require('./components/home/qc-home');
var RemoteHttpService_1 = require('./components/services/RemoteHttpService');
var SingletonResponseService_1 = require('./components/services/SingletonResponseService');
var left_search_pane_1 = require('./components/left-search-pane/left-search-pane');
//import {status, json} from './components/util/fetch';
var QcApp = (function () {
    function QcApp(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:8080';
        this.API_URL = '/epen-qc/ws/qc/getqc';
        this.data = []; // default data
        console.log("Loaded .... initial ....");
        this.title = 'Angular 2';
        //remoteHttpService.getBaseResponses();
        this.getResponses(this.BASE_URL + this.API_URL);
    }
    QcApp.prototype.getResponses = function (url) {
        var _this = this;
        var JSON_HEADERS = new http_2.Headers();
        JSON_HEADERS.append('Accept', 'application/json');
        JSON_HEADERS.append('Content-Type', 'application/json');
        //this.http.get(BASE_URL + TODO_API_URL, headers: JSON_HEADERS })
        this.http.get(url).map(function (res) {
            _this.data = res.json().qcResponses;
            SingletonResponseService_1.SingletonResponseService.populateData(res.json());
            console.log(SingletonResponseService_1.SingletonResponseService.getInstance());
            _this.serverData(res);
        }).subscribe(
        // onNext callback
        //    data => this.serverData(data),
        // onError callback
        // onNext callback
        //    data => this.serverData(data),
        // onError callback
        function (err) { return _this.errorMessage(err); }, 
        // onComplete callback
        // onComplete callback
        function () { return console.log('complete'); });
    };
    QcApp.prototype.serverData = function (data) {
        console.log('data', this.data);
        this.router.navigateByUrl('home');
        //  this.data = data;
    }; //serverData
    QcApp.prototype.errorMessage = function (err) {
        console.info('\n' + " // You must run these commands for the Http API to work in another process " + '\n' + " npm run express-install " + '\n' + " npm run express\n        ");
        console.error(err);
    }; //
    QcApp = __decorate([
        angular2_3.Component({
            selector: 'qc-app'
        }),
        angular2_3.View({
            templateUrl: './qc-app.html?v=<%= VERSION %>',
            directives: [angular2_4.CORE_DIRECTIVES, angular2_4.FORM_DIRECTIVES, router_3.ROUTER_DIRECTIVES, qc_home_1.QcHome, left_search_pane_1.SearchPanel]
        }),
        router_2.RouteConfig([
            { path: '/home', component: qc_home_1.QcHome, as: 'Home' },
            //  {path: '/qc/home', component: QcHome, as: 'home'},
            //    {path: '/', component: QcHome, as: 'home'},
            { path: '/left-pane', component: left_search_pane_1.SearchPanel, as: 'SearchPanel' },
            // {path: '/search-pool-header', component: SearchPoolHeader, as: 'SearchPoolHeader'},
            { path: '/qc/:taId/:itemId/:pageSize/:page', component: qc_home_1.QcHome, as: 'QcHome' }
        ]), 
        __metadata('design:paramtypes', [http_2.Http, router_2.Router])
    ], QcApp);
    return QcApp;
})();
angular2_1.bootstrap(QcApp, [RemoteHttpService_1.RemoteHttpService, SingletonResponseService_1.SingletonResponseService,
    // These are dependencies of our App
    //routerBindings(QcApp),
    angular2_2.FORM_BINDINGS,
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_BINDINGS,
    angular2_2.ELEMENT_PROBE_BINDINGS
]).then(function (app) {
    console.log("Bootstrap successful ", app);
}, function (err) {
    console.error(" PANKAJ this is error ", err);
});
;
//tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
//# sourceMappingURL=app.js.map