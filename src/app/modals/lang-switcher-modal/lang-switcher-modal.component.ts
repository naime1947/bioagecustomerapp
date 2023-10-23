import { Component } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Country, CountryList } from './country-list';

@Component({
  selector: 'app-lang-switcher-modal',
  templateUrl: './lang-switcher-modal.component.html',
  styleUrls: ['./lang-switcher-modal.component.scss'],
})
export class LangSwitcherModalComponent {
  countryList: Country[] = CountryList;

  selectedCountry: string = 'NZ';
  selectedLang: string = 'en-US';

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  onLangSelect(lang: string) {
    this.selectedLang = lang;
  }
}
