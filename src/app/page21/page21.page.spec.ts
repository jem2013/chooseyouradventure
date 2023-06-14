import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page21Page } from './page21.page';

describe('Page21Page', () => {
  let component: Page21Page;
  let fixture: ComponentFixture<Page21Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
