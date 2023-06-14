import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page26Page } from './page26.page';

describe('Page26Page', () => {
  let component: Page26Page;
  let fixture: ComponentFixture<Page26Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
