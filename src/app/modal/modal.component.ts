import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  form: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  add(modalForm: NgForm, basicModal: any) {
    //megnezni hogy letezo varosnév-e: vagy itt vagy az app-ben
    //tovabbitani a nevet az app-nek
    basicModal.hide();
    modalForm.reset();
  }
}
