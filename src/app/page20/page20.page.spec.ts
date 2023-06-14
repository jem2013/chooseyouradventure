import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page20Page } from './page20.page';

describe('Page20Page', () => {
  let component: Page20Page;
  let fixture: ComponentFixture<Page20Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
