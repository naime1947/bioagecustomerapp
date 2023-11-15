import { Component } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { UserLocaleUtil } from 'src/app/shared/services/user-locale-preference.service';
import { UserLocalePreferenceModel } from './../../shared/models/user-local-preference.model';
import { environment } from 'src/environments/environment';
import { Country } from './country.model';
import { SignInLinkService } from 'src/app/shared/services/sign-in-link.service';

@Component({
  selector: 'app-lang-switcher-modal',
  templateUrl: './lang-switcher-modal.component.html',
  styleUrls: ['./lang-switcher-modal.component.scss'],
})
export class LangSwitcherModalComponent {
  countryList: Country[] = environment.COUNTRY_LIST as Country[];

  selectedCountry: string = 'NZ';
  selectedLang: 'en' | 'es' = 'en';

  constructor(public bsModalRef: BsModalRef, private signInService: SignInLinkService) {}

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

    this.signInService.setSignInLink(this.selectedCountry);

    window.location.href = '/' + this.selectedLang;
  }
}
