import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleReserveComponent } from './temple-reserve.component';

describe('TempleReserveComponent', () => {
  let component: TempleReserveComponent;
  let fixture: ComponentFixture<TempleReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
