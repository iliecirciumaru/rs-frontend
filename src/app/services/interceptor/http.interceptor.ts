import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; import 'rxjs/add/operator/map';
import { UserService } from "../user.service";

@Injectable()
export class RsHttpInterceptor implements HttpInterceptor {
    authService: UserService = null;

    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService == null) {
            this.authService = this.injector.get(UserService);
        }

        if (this.authService != null && this.authService.isUserSignedIn()) {
            const authHeader = this.authService.user.token;
            const authReq = req.clone({
                headers: req.headers.set('X-RS-AUTH-TOKEN', authHeader).set('Content-Type', 'application/json')
            });
            console.log("HttpInterceptor: ", authReq)
            return next.handle(authReq);
        }

        return next.handle(req);
    }
}
