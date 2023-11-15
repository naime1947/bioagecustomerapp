import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { LangSwitcherModalComponent } from './modals/lang-switcher-modal/lang-switcher-modal.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { UserLocalePreferenceModel } from './shared/models/user-local-preference.model';
import { UserLocaleUtil } from './shared/services/user-locale-preference.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';
import { CookieConsentModalComponent } from './modals/cookie-consent-modal/cookie-consent-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'bioagecustomer';
  bsModalRef?: BsModalRef;
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.handleLangSwitcher();
      AOS.init({
        once: false,
        offset: 200,
        duration: 650,
      });
      AOS.refresh();
    }
  }

  handleLangSwitcher() {
    var savedData = UserLocaleUtil.getUserLocalPreference();
    if (!savedData) {
      this.openLangModal();
    } else {
      var langWithDomain = location.host + '/' + savedData.lang;
      if (!location.href.includes(langWithDomain)) {
        location.href = '/' + savedData.lang;
      }
    }
  }

  openLangModal(cancelabe = true) {
    const config = {
      backdrop: true,
      ignoreBackdropClick: cancelabe,
      keyboard: !cancelabe,
      class: 'modal-dialog-centered'
    };
    this.bsModalRef = this.modalService.show(
      LangSwitcherModalComponent,
      config
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.openCookieConsentModal();
    }
  }
  openCookieConsentModal() {
    const config = {
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: false,
      class: 'modal-dialog-bottom'
    };
    this.bsModalRef = this.modalService.show(
      CookieConsentModalComponent,
      config
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
