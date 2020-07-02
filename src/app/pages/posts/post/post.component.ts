import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: any;

  @Output() getId:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarId(){
    this.getId.emit( this.post.id);
  }


}
