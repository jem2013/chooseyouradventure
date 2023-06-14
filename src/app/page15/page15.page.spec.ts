import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page15Page } from './page15.page';

describe('Page15Page', () => {
  let component: Page15Page;
  let fixture: ComponentFixture<Page15Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
