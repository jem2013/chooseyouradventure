import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page17Page } from './page17.page';

describe('Page17Page', () => {
  let component: Page17Page;
  let fixture: ComponentFixture<Page17Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
