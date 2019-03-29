import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

export class MyIntercetor implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        return

       
    }

}