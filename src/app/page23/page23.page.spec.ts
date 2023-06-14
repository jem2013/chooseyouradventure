import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page23Page } from './page23.page';

describe('Page23Page', () => {
  let component: Page23Page;
  let fixture: ComponentFixture<Page23Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
