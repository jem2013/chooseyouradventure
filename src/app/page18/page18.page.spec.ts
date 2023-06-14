import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page18Page } from './page18.page';

describe('Page18Page', () => {
  let component: Page18Page;
  let fixture: ComponentFixture<Page18Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
