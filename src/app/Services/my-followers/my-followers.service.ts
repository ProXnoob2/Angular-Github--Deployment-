import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class MyFollowersService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http)
  }
}
