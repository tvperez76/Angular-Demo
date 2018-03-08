import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyApiService {

  constructor(private client: HttpClient) { }

  public getResults(): Observable<Array<string>> {
    return this.client.get<Array<string>>('/api/values');
  }
}
