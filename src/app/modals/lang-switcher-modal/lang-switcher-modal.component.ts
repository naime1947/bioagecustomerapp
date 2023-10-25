import { Component } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Country, CountryList } from './country-list';
import { UserLocaleUtil } from 'src/app/shared/services/user-locale-preference.service';
import { UserLocalePreferenceModel } from './../../shared/models/user-local-preference.model';

@Component({
  selector: 'app-lang-switcher-modal',
  templateUrl: './lang-switcher-modal.component.html',
  styleUrls: ['./lang-switcher-modal.component.scss'],
})
export class LangSwitcherModalComponent {
  countryList: Country[] = CountryList;

  selectedCountry: string = 'NZ';
  selectedLang: 'en' | 'es' = 'en';

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    let preference = UserLocaleUtil.getUserLocalPreference();
    this.selectedLang = preference? preference.lang : 'en';
    this.selectedCountry = preference? preference.countryCode : 'NZ';
  }

  onLangSelect(lang: any) {
    this.selectedLang = lang;
  }

  onConfirm() {
    let data: UserLocalePreferenceModel = {
      countryCode: this.selectedCountry,
      lang: this.selectedLang,
    };
    UserLocaleUtil.updatePreference(data);
    window.location.href = '/' + this.selectedLang;
  }
}
