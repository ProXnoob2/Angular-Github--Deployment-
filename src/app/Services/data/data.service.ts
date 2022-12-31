import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from 'src/app/common/errors/app-error';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
import { BadRequestError } from "src/app/common/errors/bad-request-error";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(map(response => response), catchError(this.handleError));
  }

  create(resource: any) {
    //return throwError(() => new AppError());
    return this.http.post(this.url, JSON.stringify(resource)).pipe(map(response => response), catchError(this.handleError))
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(map(response => response), catchError(this.handleError))
  }

  delete(id: any) {
    //return throwError(() => new AppError());
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(() => new BadRequestError(error.json()));
    else if (error.status === 404)
      return throwError(() => new NotFoundError());
    else return throwError(() => new AppError(error));
  }

}
