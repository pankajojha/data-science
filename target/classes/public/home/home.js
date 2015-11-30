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
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var Home = (function () {
    function Home(http, router) {
        this.http = http;
        this.router = router;
        this.jwt = localStorage.getItem('jwt');
        this.http = http;
    }
    Home.prototype.logout = function () {
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    };
    Home.prototype._call = function (type, url) {
        var _this = this;
        var JSON_HEADERS = new http_1.Headers();
        JSON_HEADERS.append('Accept', 'application/json');
        JSON_HEADERS.append('Content-Type', 'application/json');
        this.api = type;
        this.http.get(url).map(function (res) {
            _this.serverData(res);
        }).subscribe(function (err) { return _this.errorMessage(err); }, function () { return console.log('complete'); });
    };
    Home.prototype.serverData = function (data) {
        console.log('data', this.data);
        this.data = data;
    };
    Home.prototype.errorMessage = function (err) {
        console.info('just done');
        console.error(err);
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES],
            template: "<div>\n        <div class=\"home jumbotron centered\">\n        <h1>Welcome to the Home page!</h1>\n       <!-- <h2 *ng-if=\"jwt\">Your JWT is:</h2>\n        <pre *ng-if=\"jwt\" class=\"jwt\"><code>{{ jwt }}</code></pre>\n        <pre *ng-if=\"jwt\" class=\"jwt\"><code>{{ decodedJwt | json }}</code></pre>\n        <p>Click any of the buttons to call an API and get a response</p>\n        <p><a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"callAnonymousApi()\">Call Anonymous API</a></p>\n        <p><a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"callSecuredApi()\">Call Secure API</a></p>\n        <p><a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"logout()\">Logout</a></p>\n        <h2 *ng-if=\"response\">The response of calling the <span class=\"red\">{{api}}</span> API is:</h2>\n        <h3 *ng-if=\"response\">{{response}}</h3>-->\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS50cyJdLCJuYW1lcyI6WyJIb21lIiwiSG9tZS5jb25zdHJ1Y3RvciIsIkhvbWUubG9nb3V0IiwiSG9tZS5fY2FsbCIsIkhvbWUuc2VydmVyRGF0YSIsIkhvbWUuZXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ25FLHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQU01QztJQThCSUEsY0FBbUJBLElBQVVBLEVBQVNBLE1BQWFBO1FBQWhDQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtRQUFTQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFPQTtRQUMvQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3JCQSxDQUFDQTtJQUVERCxxQkFBTUEsR0FBTkE7UUFDSUUsWUFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQy9DQSxDQUFDQTtJQUVERixvQkFBS0EsR0FBTEEsVUFBTUEsSUFBSUEsRUFBRUEsR0FBR0E7UUFBZkcsaUJBZUNBO1FBZEdBLElBQU1BLFlBQVlBLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLENBQUNBO1FBQ25DQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO1FBQ2xEQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxjQUFjQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO1FBQ3hEQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUVoQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FDaEJBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBO1lBRUZBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3hCQSxDQUFDQSxDQUNKQSxDQUFDQSxTQUFTQSxDQUNIQSxVQUFBQSxHQUFHQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUF0QkEsQ0FBc0JBLEVBQ2xDQSxjQUFNQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUF2QkEsQ0FBdUJBLENBQ2hDQSxDQUFDQTtJQUNOQSxDQUFDQTtJQUVESCx5QkFBVUEsR0FBVkEsVUFBV0EsSUFBSUE7UUFDWEksT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFL0JBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3JCQSxDQUFDQTtJQUVESiwyQkFBWUEsR0FBWkEsVUFBYUEsR0FBR0E7UUFDWkssT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDMUJBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQWxFTEw7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO1NBQ25CQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7WUFHN0JBLFFBQVFBLEVBQ0pBLHk0QkFhREE7U0FFTkEsQ0FBQ0E7O2FBNkNEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQXBFQSxBQW9FQ0EsSUFBQTtBQTVDWSxZQUFJLE9BNENoQixDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG4vL2xldCBzdHlsZXMgPSByZXF1aXJlKCcuL2hvbWUuY3NzJyk7XG4vL2xldCB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vaG9tZS5odG1sJyk7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJ1xufSlcbkBWaWV3KHtcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICAvL3RlbXBsYXRlVXJsOiAnLi9ob21lLmh0bWwnLFxuICAgLy8gc3R5bGVVcmxzOiBbJy4vaG9tZS5jc3MnXSxcbiAgICB0ZW1wbGF0ZTpcbiAgICAgICAgYDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lIGp1bWJvdHJvbiBjZW50ZXJlZFwiPlxuICAgICAgICA8aDE+V2VsY29tZSB0byB0aGUgSG9tZSBwYWdlITwvaDE+XG4gICAgICAgPCEtLSA8aDIgKm5nLWlmPVwiand0XCI+WW91ciBKV1QgaXM6PC9oMj5cbiAgICAgICAgPHByZSAqbmctaWY9XCJqd3RcIiBjbGFzcz1cImp3dFwiPjxjb2RlPnt7IGp3dCB9fTwvY29kZT48L3ByZT5cbiAgICAgICAgPHByZSAqbmctaWY9XCJqd3RcIiBjbGFzcz1cImp3dFwiPjxjb2RlPnt7IGRlY29kZWRKd3QgfCBqc29uIH19PC9jb2RlPjwvcHJlPlxuICAgICAgICA8cD5DbGljayBhbnkgb2YgdGhlIGJ1dHRvbnMgdG8gY2FsbCBhbiBBUEkgYW5kIGdldCBhIHJlc3BvbnNlPC9wPlxuICAgICAgICA8cD48YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNhbGxBbm9ueW1vdXNBcGkoKVwiPkNhbGwgQW5vbnltb3VzIEFQSTwvYT48L3A+XG4gICAgICAgIDxwPjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2FsbFNlY3VyZWRBcGkoKVwiPkNhbGwgU2VjdXJlIEFQSTwvYT48L3A+XG4gICAgICAgIDxwPjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwibG9nb3V0KClcIj5Mb2dvdXQ8L2E+PC9wPlxuICAgICAgICA8aDIgKm5nLWlmPVwicmVzcG9uc2VcIj5UaGUgcmVzcG9uc2Ugb2YgY2FsbGluZyB0aGUgPHNwYW4gY2xhc3M9XCJyZWRcIj57e2FwaX19PC9zcGFuPiBBUEkgaXM6PC9oMj5cbiAgICAgICAgPGgzICpuZy1pZj1cInJlc3BvbnNlXCI+e3tyZXNwb25zZX19PC9oMz4tLT5cbiAgICA8L2Rpdj5cbjwvZGl2PmBcblxufSlcbmV4cG9ydCBjbGFzcyBIb21lIHtcbiAgICBqd3Q6c3RyaW5nO1xuICAgIGRhdGE6c3RyaW5nO1xuICAgIGFwaTpzdHJpbmc7XG4gICAgLy9odHRwIDogSHR0cDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwLCBwdWJsaWMgcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLmp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdqd3QnKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyZW50Lm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuICAgIH1cblxuICAgIF9jYWxsKHR5cGUsIHVybCkge1xuICAgICAgICBjb25zdCBKU09OX0hFQURFUlMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBKU09OX0hFQURFUlMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICBKU09OX0hFQURFUlMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICB0aGlzLmFwaSA9IHR5cGU7XG5cbiAgICAgICAgdGhpcy5odHRwLmdldCh1cmxcbiAgICAgICAgKS5tYXAocmVzID0+IHtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICB0aGlzLnNlcnZlckRhdGEocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZXJyICA9PiB0aGlzLmVycm9yTWVzc2FnZShlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2NvbXBsZXRlJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLmRhdGEpO1xuICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2hvbWUnKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9Ly9zZXJ2ZXJEYXRhXG5cbiAgICBlcnJvck1lc3NhZ2UoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnanVzdCBkb25lJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=