import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieConsentModalComponent } from './cookie-consent-modal.component';

describe('CookieConsentModalComponent', () => {
  let component: CookieConsentModalComponent;
  let fixture: ComponentFixture<CookieConsentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieConsentModalComponent]
    });
    fixture = TestBed.createComponent(CookieConsentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
