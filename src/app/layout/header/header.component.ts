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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  @Output() handleLangSwitch = new EventEmitter();
  isBrowser = false;

  savedLang: any;
  /**
   *
   */
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
