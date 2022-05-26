import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import httpInterface from './httpInterface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  sendHttp() {
    return this.http.get<httpInterface>('/api/getWorkingPartners');
  }
}
