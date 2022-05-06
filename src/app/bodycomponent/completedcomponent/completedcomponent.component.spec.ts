import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedcomponentComponent } from './completedcomponent.component';

describe('CompletedcomponentComponent', () => {
  let component: CompletedcomponentComponent;
  let fixture: ComponentFixture<CompletedcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
