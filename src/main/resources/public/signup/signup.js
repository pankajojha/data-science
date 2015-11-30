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
var Signup = (function () {
    function Signup(http, router) {
        this.http = http;
        this.router = router;
    }
    Signup.prototype.signup = function (event, username, password) {
        this.http.post("http://xyzurl", JSON.stringify({ username: username, password: password }));
    };
    Signup.prototype.login = function (event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/login');
    };
    Signup = __decorate([
        angular2_1.Component({
            selector: 'signup'
        }),
        angular2_1.View({
            directives: [router_1.RouterLink, angular2_1.CORE_DIRECTIVES],
            template: "\n         <div class=\"signup center-block jumbotron\">\n        <h1>Signup</h1>\n        <form role=\"form\" (submit)=\"signup($event, username.value, password.value)\">\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], Signup);
    return Signup;
})();
exports.Signup = Signup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAudHMiXSwibmFtZXMiOlsiU2lnbnVwIiwiU2lnbnVwLmNvbnN0cnVjdG9yIiwiU2lnbnVwLnNpZ251cCIsIlNpZ251cC5sb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBK0MsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRSx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNyRCxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFLNUM7SUEwQklBLGdCQUFtQkEsSUFBVUEsRUFBUUEsTUFBY0E7UUFBaENDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO1FBQVFBLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO0lBQ25EQSxDQUFDQTtJQUVERCx1QkFBTUEsR0FBTkEsVUFBT0EsS0FBS0EsRUFBRUEsUUFBUUEsRUFBRUEsUUFBUUE7UUFDN0JFLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUNBLFVBQUFBLFFBQVFBLEVBQUVBLFVBQUFBLFFBQVFBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQzFFQSxDQUFDQTtJQUdERixzQkFBS0EsR0FBTEEsVUFBTUEsS0FBS0E7UUFDUEcsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQy9DQSxDQUFDQTtJQXJDTEg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO1NBQ3JCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxVQUFVQSxFQUFFQSxDQUFFQSxtQkFBVUEsRUFBRUEsMEJBQWVBLENBQUVBO1lBRzNDQSxRQUFRQSxFQUFDQSxpdkJBZVJBO1NBQ0pBLENBQUNBOztlQWdCREE7SUFBREEsYUFBQ0E7QUFBREEsQ0F2Q0EsQUF1Q0NBLElBQUE7QUFmWSxjQUFNLFNBZWxCLENBQUEiLCJmaWxlIjoic2lnbnVwL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG4vL2xldCBzdHlsZXMgICA9IHJlcXVpcmUoJy4vc2lnbnVwLmNzcycpO1xuLy9sZXQgdGVtcGxhdGUgPSByZXF1aXJlKCcuL3NpZ251cC5odG1sJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbnVwJ1xufSlcbkBWaWV3KHtcbiAgICBkaXJlY3RpdmVzOiBbIFJvdXRlckxpbmssIENPUkVfRElSRUNUSVZFUyBdLFxuICAgLy8gdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5odG1sJyxcbiAgIC8vIHN0eWxlVXJsczogWycuL3NpZ251cC5jc3MnXSxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgICA8ZGl2IGNsYXNzPVwic2lnbnVwIGNlbnRlci1ibG9jayBqdW1ib3Ryb25cIj5cbiAgICAgICAgPGgxPlNpZ251cDwvaDE+XG4gICAgICAgIDxmb3JtIHJvbGU9XCJmb3JtXCIgKHN1Ym1pdCk9XCJzaWdudXAoJGV2ZW50LCB1c2VybmFtZS52YWx1ZSwgcGFzc3dvcmQudmFsdWUpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjdXNlcm5hbWUgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgI3Bhc3N3b3JkIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwLHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIHNpZ251cChldmVudCwgdXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgdGhpcy5odHRwLnBvc3QoXCJodHRwOi8veHl6dXJsXCIsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZSwgcGFzc3dvcmQgfSkpO1xuICAgIH1cblxuXG4gICAgbG9naW4oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyZW50Lm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==