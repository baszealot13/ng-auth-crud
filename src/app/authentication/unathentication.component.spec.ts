import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnathenticationComponent } from './unathentication.component';

describe('UnathenticationComponent', () => {
  let component: UnathenticationComponent;
  let fixture: ComponentFixture<UnathenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnathenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnathenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
