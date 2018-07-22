import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuzuIntroComponent } from './yuzu-intro.component';

describe('YuzuIntroComponent', () => {
  let component: YuzuIntroComponent;
  let fixture: ComponentFixture<YuzuIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuzuIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuzuIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
