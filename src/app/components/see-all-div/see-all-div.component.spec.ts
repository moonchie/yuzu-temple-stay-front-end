import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllDivComponent } from './see-all-div.component';

describe('SeeAllDivComponent', () => {
  let component: SeeAllDivComponent;
  let fixture: ComponentFixture<SeeAllDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAllDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
