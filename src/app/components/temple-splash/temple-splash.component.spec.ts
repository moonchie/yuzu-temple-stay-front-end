import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleSplashComponent } from './temple-splash.component';

describe('TempleSplashComponent', () => {
  let component: TempleSplashComponent;
  let fixture: ComponentFixture<TempleSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
