import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SignInLinkService {
  signInLink = signal("");

  public setSignInLink(countrycode: string | undefined) {
    if (countrycode?.toLocaleLowerCase() == 'us') {
      this.signInLink.set(environment.SIGN_IN_US);
    } else {
      this.signInLink.set(environment.SIGN_IN_AU_NZ);
    }
  }
}
