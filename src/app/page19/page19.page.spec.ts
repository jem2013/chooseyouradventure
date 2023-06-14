import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page19Page } from './page19.page';

describe('Page19Page', () => {
  let component: Page19Page;
  let fixture: ComponentFixture<Page19Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
