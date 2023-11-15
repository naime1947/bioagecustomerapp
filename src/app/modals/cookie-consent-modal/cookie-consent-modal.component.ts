import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cookie-consent-modal',
  templateUrl: './cookie-consent-modal.component.html',
  styleUrls: ['./cookie-consent-modal.component.scss']
})
export class CookieConsentModalComponent {

  constructor(public bsModalRef: BsModalRef){}
  onAccept(){this.bsModalRef.hide()}
  onSettings(){}
}
