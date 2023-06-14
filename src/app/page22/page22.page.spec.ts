import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page22Page } from './page22.page';

describe('Page22Page', () => {
  let component: Page22Page;
  let fixture: ComponentFixture<Page22Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
