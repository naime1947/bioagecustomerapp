import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLocalePreferenceModel } from '../models/user-local-preference.model';

export class UserLocaleUtil {
  static key: string = 'user-locale-preference';
  static userLocalPreference: UserLocalePreferenceModel | null = null;

  static updatePreference(data: UserLocalePreferenceModel) {
    localStorage.setItem(this.key, JSON.stringify(data));
    this.userLocalPreference = data;
  }

  static getUserLocalPreference(): UserLocalePreferenceModel | null {
    var data = localStorage.getItem(this.key);
    if (data) {
      this.userLocalPreference = JSON.parse(data);
      return this.userLocalPreference;
    }
    return null;
  }
}
