import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { UserLocaleUtil } from 'src/app/shared/services/user-locale-preference.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isCollapsed = true;
  @Output() handleLangSwitch = new EventEmitter();
  isBrowser = false;
  savedLang: any;

  year = new Date().getFullYear();
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
    if (this.isBrowser) {
      let preference = UserLocaleUtil.getUserLocalPreference();
      this.savedLang = preference ? preference.lang : 'en';
    }
  }

  onToggle() {
    this.handleLangSwitch.emit();
  }
}
