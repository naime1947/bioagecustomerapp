import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { LangSwitcherModalComponent } from './modals/lang-switcher-modal/lang-switcher-modal.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { UserLocalePreferenceModel } from './shared/models/user-local-preference.model';
import { UserLocaleUtil } from './shared/services/user-locale-preference.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bioagecustomer';
  bsModalRef?: BsModalRef;
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      //this.handleLangSwitcher();
      this.openModalWithComponent();
    }
  }

  handleLangSwitcher() {
    var savedData = UserLocaleUtil.getUserLocalPreference();
    if (!savedData) {
      this.openModalWithComponent();
    } else {
      var langWithDomain = location.host + '/' + savedData.lang;
      if (!location.href.includes(langWithDomain)) {
        this.openModalWithComponent();
      }
    }
  }

  openModalWithComponent() {
    const config = {
      backdrop: true,
      ignoreBackdropClick: false,
      keyboard: false,
    };
    this.bsModalRef = this.modalService.show(
      LangSwitcherModalComponent,
      config
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
