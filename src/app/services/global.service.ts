import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class GlobalService {

  public http: Http;
  public server: string = 'http://localhost:3000';

  constructor(http: Http) {
  this.http = http;
  }
}
