import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page30Page } from './page30.page';

describe('Page30Page', () => {
  let component: Page30Page;
  let fixture: ComponentFixture<Page30Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
