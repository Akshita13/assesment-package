import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'akshita-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() header:any[];
  @Output() editClicked=new EventEmitter();
  @Output() deleteClicked=new EventEmitter();
  public key;
  public student;

  @Input() set studentList(value:any)
  {
    this.student=value;
    if (value) {
      value.forEach(element => {
        this.key=Object.keys(element);
      console.log(this.key);
      
      });
      
    }
    
  }
  get studentList()
  {
    return this.student;
  }
  constructor() { }

  ngOnInit() {

  }
  public onEdit(id: any) {
    this.editClicked.emit(id);
  }

  public onDelete(id: any) {
    this.deleteClicked.emit(id);
  }

}
