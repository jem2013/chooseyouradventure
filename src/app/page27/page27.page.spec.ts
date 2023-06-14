import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page27Page } from './page27.page';

describe('Page27Page', () => {
  let component: Page27Page;
  let fixture: ComponentFixture<Page27Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
