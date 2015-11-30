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
var Login = (function () {
    function Login(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:9999';
        this.APP_URL = '/user/validate';
    }
    Login.prototype.signup = function (event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    };
    Login.prototype.login = function () {
        var _this = this;
        this.http.post(this.BASE_URL, body, JSON.stringify({
            username: username, password: password
        })).map(function (res) {
            _this.serverData(res);
        }).subscribe(function (err) { return _this.errorMessage(err); }, function () { return console.log('complete'); });
    };
    Login.prototype.serverData = function (data) {
        console.log('data', this.data);
        this.router.navigateByUrl('home');
    };
    Login.prototype.errorMessage = function (err) {
        console.info("got it ");
        console.error(err);
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login'
        }),
        angular2_1.View({
            template: "\n            <div class=\"login center-block\">\n            <h1>Login</h1>\n            <form role=\"form\" (submit)=\"login($event, username.value, password.value)\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                <a href=\"/signup\">Click here to Signup</a>\n            </form>\n        </div>",
            directives: [router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], Login);
    return Login;
})();
exports.Login = Login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLnRzIl0sIm5hbWVzIjpbIkxvZ2luIiwiTG9naW4uY29uc3RydWN0b3IiLCJMb2dpbi5zaWdudXAiLCJMb2dpbi5sb2dpbiIsIkxvZ2luLnNlcnZlckRhdGEiLCJMb2dpbi5lcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQThCLG1CQUFtQixDQUFDLENBQUE7QUFDbEQsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBSzVDO0lBK0JJQSxlQUFtQkEsSUFBU0EsRUFBU0EsTUFBYUE7UUFBL0JDLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1FBQVNBLFdBQU1BLEdBQU5BLE1BQU1BLENBQU9BO1FBSmxEQSxhQUFRQSxHQUFHQSx1QkFBdUJBLENBQUNBO1FBQ25DQSxZQUFPQSxHQUFHQSxnQkFBZ0JBLENBQUNBO0lBSzNCQSxDQUFDQTtJQUdERCxzQkFBTUEsR0FBTkEsVUFBT0EsS0FBS0E7UUFDUkUsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQUVERixxQkFBS0EsR0FBTEE7UUFBQUcsaUJBY0NBO1FBYkdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQ3hCQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNqQkEsVUFBQUEsUUFBUUEsRUFBRUEsVUFBQUEsUUFBUUE7U0FDckJBLENBQUNBLENBQ0xBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBO1lBRURBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQSxDQUNKQSxDQUFDQSxTQUFTQSxDQUNIQSxVQUFBQSxHQUFHQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUF0QkEsQ0FBc0JBLEVBRWxDQSxjQUFNQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUF2QkEsQ0FBdUJBLENBQ2hDQSxDQUFDQTtJQUNOQSxDQUFDQTtJQUVESCwwQkFBVUEsR0FBVkEsVUFBV0EsSUFBSUE7UUFDWEksT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFL0JBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO0lBRXRDQSxDQUFDQTtJQUVESiw0QkFBWUEsR0FBWkEsVUFBYUEsR0FBR0E7UUFDWkssT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDeEJBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQW5FTEw7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE9BQU9BO1NBQ3BCQSxDQUFDQTtRQUVEQSxlQUFJQSxDQUFDQTtZQUVGQSxRQUFRQSxFQUFFQSxtMUJBZUNBO1lBQ1hBLFVBQVVBLEVBQUVBLENBQUNBLG1CQUFVQSxDQUFDQTtTQUczQkEsQ0FBQ0E7O2NBbUVEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQTVGQSxBQTRGQ0EsSUFBQTtBQWxFWSxhQUFLLFFBa0VqQixDQUFBIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5cbi8vbGV0IHRlbXBsYXRlID0gcmVxdWlyZSgnLi9sb2dpbi5odG1sJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4nXG59KVxuXG5AVmlldyh7XG4gICAgLy8gdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbiBjZW50ZXItYmxvY2tcIj5cbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgICAgICA8Zm9ybSByb2xlPVwiZm9ybVwiIChzdWJtaXQpPVwibG9naW4oJGV2ZW50LCB1c2VybmFtZS52YWx1ZSwgcGFzc3dvcmQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjdXNlcm5hbWUgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiICNwYXNzd29yZCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NpZ251cFwiPkNsaWNrIGhlcmUgdG8gU2lnbnVwPC9hPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXVxuICAvLyAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY3NzJ11cblxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gICAgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo5OTk5JztcbiAgICBBUFBfVVJMID0gJy91c2VyL3ZhbGlkYXRlJztcbiAgICBkYXRhOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHAsIHB1YmxpYyByb3V0ZXI6Um91dGVyKSB7XG5cbiAgICB9XG5cblxuICAgIHNpZ251cChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5wYXJlbnQubmF2aWdhdGVCeVVybCgnL3NpZ251cCcpO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmh0dHAucG9zdCh0aGlzLkJBU0VfVVJMXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICApLm1hcChyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8qIHRoaXMuZGF0YSA9IHJlcy5qc29uKCk7Ki9cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZlckRhdGEocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZXJyICA9PiB0aGlzLmVycm9yTWVzc2FnZShlcnIpLFxuICAgICAgICAgICAgLy8gb25Db21wbGV0ZSBjYWxsYmFja1xuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2NvbXBsZXRlJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXJ2ZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLmRhdGEpO1xuICAgICAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3QnLCByZXNwb25zZS5pZF90b2tlbik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2hvbWUnKTtcbiAgICAgICAgLy8gIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfS8vc2VydmVyRGF0YVxuXG4gICAgZXJyb3JNZXNzYWdlKGVycikge1xuICAgICAgICBjb25zb2xlLmluZm8oYGdvdCBpdCBgKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cblxuICAgIC8qbG9naW4oZXZlbnQsIHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICB3aW5kb3cuZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6OTk5OS9zZXNzaW9ucy9jcmVhdGUnLCB7XG4gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICBoZWFkZXJzOiB7XG4gICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgfSxcbiAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICB1c2VybmFtZSwgcGFzc3dvcmRcbiAgICAgfSlcbiAgICAgfSlcbiAgICAgLnRoZW4oc3RhdHVzKVxuICAgICAudGhlbihqc29uKVxuICAgICAudGhlbigocmVzcG9uc2U6YW55KSA9PiB7XG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3QnLCByZXNwb25zZS5pZF90b2tlbik7XG4gICAgIHRoaXMucm91dGVyLnBhcmVudC5uYXZpZ2F0ZUJ5VXJsKCcvaG9tZScpO1xuICAgICB9KVxuICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgfSk7XG4gICAgIH0qL1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==