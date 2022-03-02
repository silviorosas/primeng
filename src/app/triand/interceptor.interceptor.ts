import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './interface.request'

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<Request>, next: HttpHandler): Observable<HttpEvent<Request>> {

    const headers = new HttpHeaders({
      'Authorization': 'admin',
      'Sucursal': 'CITDF'
    });

    const reqClone = request.clone({
      headers
    });

    return next.handle(reqClone);

  }
}
