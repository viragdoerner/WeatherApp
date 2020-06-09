import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  form: any = {};
  constructor() { }
  @Output() cityName: string;
  @Output() onAddTab = new EventEmitter<string>();
  ngOnInit(): void {
  }

  add(modalForm: NgForm, basicModal: any) {
    // tovabbitani a nevet az app-nek
    this.onAddTab.emit(this.form.city);
    // modal bezárása, form ürítése
    basicModal.hide();
    modalForm.reset();
  }
}
