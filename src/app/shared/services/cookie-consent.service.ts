import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  getCookie(cName: string) {
    const name = cName + '=';
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let value;
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) {
        value = val.substring(name.length);
      }
    });

    return value;
  }

  setCookie(cName: string, cValue: any, expDays: number) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = cName + '=' + cValue + ';' + expires + '; path=/';
  }
}
