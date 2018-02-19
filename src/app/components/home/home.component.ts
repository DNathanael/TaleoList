import { Component, OnInit } from '@angular/core';
import {ListService} from "../../services/list.service";
import {List} from "../../models/list.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  private listetotal: ListService;
  public load: Array<List>;
  public allarticle: boolean;
  public specificarticle: boolean;

  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(listService: ListService) {
    this.listetotal = listService;
  }

  ngOnInit() {
    this.allarticle = true;
    this.loadList();
  }

  public loadList(): void {
    this.listetotal.getLists()
      .subscribe(
        data => {
          this.load = data;
          console.log(this.load);
        }
      );
}
 public isAllarticle(): boolean{
    return this.allarticle;
 }
 public setAllarticle(value: boolean){
    this.allarticle = value;
    this.specificarticle = !value;
 }

  public isSpecificarticle(): boolean{
    return this.specificarticle;
  }
  public setSpecificarticle(value: boolean){
    this.specificarticle = value;
    this.allarticle = !value;
  }

  public process(userId: number, id: number, title: string, body: string){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
    return this.id;
  }
  public del(){
    this.listetotal.del(this.id)
      .subscribe()
    window.location.reload();
  }




}
