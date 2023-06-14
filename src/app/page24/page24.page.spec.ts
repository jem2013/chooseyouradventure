import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page24Page } from './page24.page';

describe('Page24Page', () => {
  let component: Page24Page;
  let fixture: ComponentFixture<Page24Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
