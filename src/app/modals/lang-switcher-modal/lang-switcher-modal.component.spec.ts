import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangSwitcherModalComponent } from './lang-switcher-modal.component';

describe('LangSwitcherModalComponent', () => {
  let component: LangSwitcherModalComponent;
  let fixture: ComponentFixture<LangSwitcherModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangSwitcherModalComponent]
    });
    fixture = TestBed.createComponent(LangSwitcherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
