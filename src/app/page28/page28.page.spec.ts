import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page28Page } from './page28.page';

describe('Page28Page', () => {
  let component: Page28Page;
  let fixture: ComponentFixture<Page28Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
