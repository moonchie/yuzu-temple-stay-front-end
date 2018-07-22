import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTempleComponent } from './one-temple.component';

describe('OneTempleComponent', () => {
  let component: OneTempleComponent;
  let fixture: ComponentFixture<OneTempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
