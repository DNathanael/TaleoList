import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './global.service';
import { List} from "../models/list.model";


@Injectable()
export class ListService extends GlobalService {

  public title: string;



  public getLists(): Observable<Array<List>> {
    return this.http
      .get(this.server + '/liste')
      .map(response => {
        console.log('ListService:get().map()');
        let list: Array<List> = response.json();
        console.log(list);
        return list;
      });
  }
  public del(id: number){
    return this.http
      .delete(this.server + '/liste/' + id );
  };



}
