import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page16Page } from './page16.page';

describe('Page16Page', () => {
  let component: Page16Page;
  let fixture: ComponentFixture<Page16Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
