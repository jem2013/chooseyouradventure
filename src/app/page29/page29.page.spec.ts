import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page29Page } from './page29.page';

describe('Page29Page', () => {
  let component: Page29Page;
  let fixture: ComponentFixture<Page29Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
