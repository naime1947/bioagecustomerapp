import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { LangSwitcherModalComponent } from './modals/lang-switcher-modal/lang-switcher-modal.component';
import { isPlatformBrowser } from '@angular/common';
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
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {

    if (this.isBrowser) {
      this.handleLangSwitcher();
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
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...',
        ],
        title: 'Modal with component',
      },
    };
    this.bsModalRef = this.modalService.show(
      LangSwitcherModalComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
