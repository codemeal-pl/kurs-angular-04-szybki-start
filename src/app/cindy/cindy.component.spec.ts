import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CindyComponent } from './cindy.component';

describe('CindyComponent', () => {
  let component: CindyComponent;
  let fixture: ComponentFixture<CindyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CindyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CindyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
