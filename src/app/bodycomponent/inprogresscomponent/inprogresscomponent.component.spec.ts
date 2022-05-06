import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogresscomponentComponent } from './inprogresscomponent.component';

describe('InprogresscomponentComponent', () => {
  let component: InprogresscomponentComponent;
  let fixture: ComponentFixture<InprogresscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprogresscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogresscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
