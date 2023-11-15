import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CookieConsentService } from 'src/app/shared/services/cookie-consent.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cookie-consent-modal',
  templateUrl: './cookie-consent-modal.component.html',
  styleUrls: ['./cookie-consent-modal.component.scss']
})
export class CookieConsentModalComponent {

  constructor(public bsModalRef: BsModalRef, private cookieConsentService: CookieConsentService){}
  onAccept(){
    this.cookieConsentService.setCookie(environment.COOKIE_CONSENT_KEY, true, 30);
    this.bsModalRef.hide();
  }
  onRejectAll(){
    this.bsModalRef.hide();
  }
}
