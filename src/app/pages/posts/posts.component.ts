import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  respuesta:any =[];

  constructor( private _ds: DataService ) { }

  ngOnInit(): void {
     this.respuesta = this._ds.getPlaceHolder$();
  }
  mostrarID( event:string ){
      console.log( event );
  }

}
