import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleInfoComponent } from './temple-info.component';

describe('TempleInfoComponent', () => {
  let component: TempleInfoComponent;
  let fixture: ComponentFixture<TempleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
