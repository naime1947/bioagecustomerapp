import { Component } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-lang-switcher-modal',
  templateUrl: './lang-switcher-modal.component.html',
  styleUrls: ['./lang-switcher-modal.component.scss']
})
export class LangSwitcherModalComponent {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
