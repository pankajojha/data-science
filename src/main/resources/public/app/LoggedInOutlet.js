var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var LoggedInRouterOutlet = (function (_super) {
    __extends(LoggedInRouterOutlet, _super);
    function LoggedInRouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
        _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            '/login': true,
            '/signup': true
        };
    }
    LoggedInRouterOutlet.prototype.activate = function (instruction) {
        var url = this.parentRouter.lastNavigationAttempt;
        if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
            this.parentRouter.navigateByUrl('/login');
        }
        return _super.prototype.activate.call(this, instruction);
    };
    LoggedInRouterOutlet = __decorate([
        angular2_1.Directive({
            selector: 'router-outlet'
        }),
        __param(3, angular2_1.Attribute('name')), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, angular2_1.DynamicComponentLoader, router_1.Router, String])
    ], LoggedInRouterOutlet);
    return LoggedInRouterOutlet;
})(router_1.RouterOutlet);
exports.LoggedInRouterOutlet = LoggedInRouterOutlet;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Mb2dnZWRJbk91dGxldC50cyJdLCJuYW1lcyI6WyJMb2dnZWRJblJvdXRlck91dGxldCIsIkxvZ2dlZEluUm91dGVyT3V0bGV0LmNvbnN0cnVjdG9yIiwiTG9nZ2VkSW5Sb3V0ZXJPdXRsZXQuYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBdUUsbUJBQW1CLENBQUMsQ0FBQTtBQUMzRix1QkFBeUQsaUJBQWlCLENBQUMsQ0FBQTtBQUczRTtJQUcwQ0Esd0NBQVlBO0lBSWxEQSw4QkFBWUEsV0FBc0JBLEVBQUVBLE9BQThCQSxFQUN0REEsYUFBb0JBLEVBQXFCQSxRQUFlQTtRQUNoRUMsa0JBQU1BLFdBQVdBLEVBQUVBLE9BQU9BLEVBQUVBLGFBQWFBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO1FBRXJEQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxhQUFhQSxDQUFDQTtRQUNsQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0E7WUFDaEJBLFFBQVFBLEVBQUVBLElBQUlBO1lBQ2RBLFNBQVNBLEVBQUVBLElBQUlBO1NBQ2xCQSxDQUFDQTtJQUNOQSxDQUFDQTtJQUVERCx1Q0FBUUEsR0FBUkEsVUFBU0EsV0FBaUNBO1FBQ3RDRSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxxQkFBcUJBLENBQUNBO1FBQ2xEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUUxREEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLGdCQUFLQSxDQUFDQSxRQUFRQSxZQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUF6QkxGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTtTQUM1QkEsQ0FBQ0E7UUFNb0NBLFdBQUNBLG9CQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFBQTs7NkJBa0J2REE7SUFBREEsMkJBQUNBO0FBQURBLENBMUJBLEFBMEJDQSxFQXZCeUMscUJBQVksRUF1QnJEO0FBdkJZLDRCQUFvQix1QkF1QmhDLENBQUEiLCJmaWxlIjoiYXBwL0xvZ2dlZEluT3V0bGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEF0dHJpYnV0ZSwgRWxlbWVudFJlZiwgRHluYW1pY0NvbXBvbmVudExvYWRlcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldCwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0xvZ2lufSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAncm91dGVyLW91dGxldCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5Sb3V0ZXJPdXRsZXQgZXh0ZW5kcyBSb3V0ZXJPdXRsZXQge1xuICAgIHB1YmxpY1JvdXRlczphbnk7XG4gICAgcHJpdmF0ZSBwYXJlbnRSb3V0ZXI6Um91dGVyO1xuXG4gICAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6RWxlbWVudFJlZiwgX2xvYWRlcjpEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICAgICAgICAgICAgICAgIF9wYXJlbnRSb3V0ZXI6Um91dGVyLCBAQXR0cmlidXRlKCduYW1lJykgbmFtZUF0dHI6c3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKF9lbGVtZW50UmVmLCBfbG9hZGVyLCBfcGFyZW50Um91dGVyLCBuYW1lQXR0cik7XG5cbiAgICAgICAgdGhpcy5wYXJlbnRSb3V0ZXIgPSBfcGFyZW50Um91dGVyO1xuICAgICAgICB0aGlzLnB1YmxpY1JvdXRlcyA9IHtcbiAgICAgICAgICAgICcvbG9naW4nOiB0cnVlLFxuICAgICAgICAgICAgJy9zaWdudXAnOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoaW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKSB7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnBhcmVudFJvdXRlci5sYXN0TmF2aWdhdGlvbkF0dGVtcHQ7XG4gICAgICAgIGlmICghdGhpcy5wdWJsaWNSb3V0ZXNbdXJsXSAmJiAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpKSB7XG4gICAgICAgICAgICAvLyB0b2RvOiByZWRpcmVjdCB0byBMb2dpbiwgbWF5IGJlIHRoZXJlIGEgYmV0dGVyIHdheT9cbiAgICAgICAgICAgIHRoaXMucGFyZW50Um91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5hY3RpdmF0ZShpbnN0cnVjdGlvbik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==