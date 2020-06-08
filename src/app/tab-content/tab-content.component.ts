import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  constructor() { }
  @Input() city: string;
  @Output() onRemove = new EventEmitter<string>();
  ngOnInit(): void {
  }

  delete() {
    console.log("delete tab");
    this.onRemove.emit(this.city);
  }
}
