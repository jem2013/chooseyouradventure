import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page25Page } from './page25.page';

describe('Page25Page', () => {
  let component: Page25Page;
  let fixture: ComponentFixture<Page25Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
