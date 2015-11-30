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
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var angular2_3 = require('angular2/angular2');
var router_2 = require('angular2/router');
var angular2_4 = require('angular2/angular2');
var router_3 = require('angular2/router');
var LoggedInOutlet_1 = require('./app/LoggedInOutlet');
var home_1 = require('./home/home');
var login_1 = require('./login/login');
var signup_1 = require('./signup/signup');
var App = (function () {
    function App(router) {
        this.router = router;
        console.log("Loaded .... initial ....");
        this.title = 'Data Science ';
    }
    App = __decorate([
        angular2_3.Component({
            selector: 'ds-app'
        }),
        angular2_3.View({
            templateUrl: './app.html?v=0.0.0',
            directives: [angular2_4.CORE_DIRECTIVES, angular2_4.FORM_DIRECTIVES, router_3.ROUTER_DIRECTIVES, login_1.Login, home_1.Home, signup_1.Signup, LoggedInOutlet_1.LoggedInRouterOutlet]
        }),
        router_2.RouteConfig([
            { path: '/', redirectTo: '/home' },
            { path: '/home', as: 'Home', component: home_1.Home },
            { path: '/login', as: 'Login', component: login_1.Login },
            { path: '/signup', as: 'Signup', component: signup_1.Signup }
        ]), 
        __metadata('design:paramtypes', [router_2.Router])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    angular2_2.FORM_BINDINGS,
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    angular2_2.ELEMENT_PROBE_BINDINGS
]).then(function (app) {
    console.log("Bootstrap successful ", app);
}, function (err) {
    console.error(" PANKAJ this is error ", err);
});
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EseUJBQThCLG1CQUFtQixDQUFDLENBQUE7QUFJbEQseUJBQW9ELG1CQUFtQixDQUFDLENBQUE7QUFDeEUscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLHVCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBS3pGLHlCQUF5QyxtQkFBbUIsQ0FBQyxDQUFBO0FBRTdELHVCQUFzRSxpQkFBaUIsQ0FBQyxDQUFBO0FBS3hGLHlCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ25FLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWxELCtCQUFtQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzFELHFCQUFtQixhQUFhLENBQUMsQ0FBQTtBQUNqQyxzQkFBb0IsZUFBZSxDQUFDLENBQUE7QUFDcEMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkM7SUFvQkVBLGFBQW9CQSxNQUFjQTtRQUFkQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFRQTtRQUNoQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMEJBQTBCQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsZUFBZUEsQ0FBQ0E7SUFNL0JBLENBQUNBO0lBNUJIRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsUUFBUUE7U0FDbkJBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLDZCQUE2QkE7WUFDMUNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSwwQkFBZUEsRUFBRUEsMEJBQWlCQSxFQUFFQSxhQUFLQSxFQUFFQSxXQUFJQSxFQUFFQSxlQUFNQSxFQUFFQSxxQ0FBb0JBLENBQUNBO1NBQzdHQSxDQUFDQTtRQUdEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBUUEsVUFBVUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDeENBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUlBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUlBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBO1lBQ2xEQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFHQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFHQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQTtZQUNuREEsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsZUFBTUEsRUFBRUE7U0FDckRBLENBQUNBOztZQWVEQTtJQUFEQSxVQUFDQTtBQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtBQUVELG9CQUFTLENBQUMsR0FBRyxFQUFFO0lBR2Isd0JBQWE7SUFDYix5QkFBZ0I7SUFDaEIscUJBQWM7SUFDZCxpQ0FBc0I7Q0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLENBQUMsRUFBRSxVQUFBLEdBQUc7SUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDQSxDQUFDO0FBQUEsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7YmluZCwgYm9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG4vKlxuICogQmluZGluZ3MgcHJvdmlkZWQgYnkgQW5ndWxhclxuICovXG5pbXBvcnQge0ZPUk1fQklORElOR1MsIEVMRU1FTlRfUFJPQkVfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBIYXNoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuLypcbiAqIEFuZ3VsYXIgMiBkZWNvcmF0b3JzIGFuZCBzZXJ2aWNlc1xuICovXG5pbXBvcnQge0RpcmVjdGl2ZSwgQ29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG4vL2ltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlciwgUm91dGVyT3V0bGV0fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtMb2NhdGlvbiwgUm91dGVDb25maWcsIFJvdXRlckxpbmssIFJvdXRlciwgUm91dGVyT3V0bGV0fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbi8qXG4gKiBBbmd1bGFyIERpcmVjdGl2ZXNcbiAqL1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtMb2dnZWRJblJvdXRlck91dGxldH0gZnJvbSAnLi9hcHAvTG9nZ2VkSW5PdXRsZXQnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL2hvbWUvaG9tZSc7XG5pbXBvcnQge0xvZ2lufSBmcm9tICcuL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7U2lnbnVwfSBmcm9tICcuL3NpZ251cC9zaWdudXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkcy1hcHAnXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgTG9naW4sIEhvbWUsIFNpZ251cCwgTG9nZ2VkSW5Sb3V0ZXJPdXRsZXRdXG59KVxuXG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCAgICAgICByZWRpcmVjdFRvOiAnL2hvbWUnIH0sXG4gIHsgcGF0aDogJy9ob21lJywgICBhczogJ0hvbWUnLCAgIGNvbXBvbmVudDogSG9tZSB9LFxuICB7IHBhdGg6ICcvbG9naW4nLCAgYXM6ICdMb2dpbicsICBjb21wb25lbnQ6IExvZ2luIH0sXG4gIHsgcGF0aDogJy9zaWdudXAnLCBhczogJ1NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwIH1cbl0pXG4vL0BJbmplY3RhYmxlKClcbmNsYXNzIEFwcCB7XG4gIC8vIFRoZXNlIGFyZSBtZW1iZXIgdHlwZVxuICB0aXRsZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvciggcHVibGljIHJvdXRlcjogUm91dGVyKSB7XG4gICAgY29uc29sZS5sb2coXCJMb2FkZWQgLi4uLiBpbml0aWFsIC4uLi5cIik7XG4gICAgdGhpcy50aXRsZSA9ICdEYXRhIFNjaWVuY2UgJztcblxuICAgIC8qcm91dGVyXG4gICAgICAgIC5jb25maWcoJy9ob21lJywgSG9tZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gcm91dGVyLmNvbmZpZygnL2xvZ2luJywgTG9naW4pKVxuICAgICAgICAudGhlbigoKSA9PiByb3V0ZXIubmF2aWdhdGUoJy9ob21lJykpOyovXG4gIH1cblxufVxuXG5ib290c3RyYXAoQXBwLCBbXG4vLyBUaGVzZSBhcmUgZGVwZW5kZW5jaWVzIG9mIG91ciBBcHBcbi8vcm91dGVyQmluZGluZ3MoUWNBcHApLFxuICBGT1JNX0JJTkRJTkdTLFxuICBST1VURVJfUFJPVklERVJTLFxuICBIVFRQX1BST1ZJREVSUyxcbiAgRUxFTUVOVF9QUk9CRV9CSU5ESU5HU1xuXSkudGhlbihhcHAgPT4ge1xuICBjb25zb2xlLmxvZyhcIkJvb3RzdHJhcCBzdWNjZXNzZnVsIFwiLCBhcHApO1xufSwgZXJyID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFwiIFBBTktBSiB0aGlzIGlzIGVycm9yIFwiLCBlcnIpO1xuICB9XG4gICk7O1xuXG4vL3RzYyAtLXdhdGNoIC1tIGNvbW1vbmpzIC10IGVzNSAtLWVtaXREZWNvcmF0b3JNZXRhZGF0YSBhcHAudHNcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==