import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';
import { SignInLinkService } from 'src/app/shared/services/sign-in-link.service';
import { UserLocaleUtil } from 'src/app/shared/services/user-locale-preference.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
          opacity: '1',
        })
      ),
      transition('initial=>final', animate('200ms')),
      transition('final=>initial', animate('100ms')),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  @Output() handleLangSwitch = new EventEmitter();
  isBrowser = false;

  savedLang: any;
  innerWidth = 1200;
  /**
   *
   */
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public signInLinkService: SignInLinkService,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
    if (this.isBrowser) {
      let preference = UserLocaleUtil.getUserLocalPreference();
      this.savedLang = preference ? preference.lang : 'en';
      this.innerWidth = window.innerWidth;
    }
  }

  onSignInClick() {
    window.location.href = this.signInLinkService.signInLink();
  }
}
