/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClicklistComponent } from './clicklist.component';

describe('ClicklistComponent', () => {
  let component: ClicklistComponent;
  let fixture: ComponentFixture<ClicklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
