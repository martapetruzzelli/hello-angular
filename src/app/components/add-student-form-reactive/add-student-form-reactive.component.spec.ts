import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentFormReactiveComponent } from './add-student-form-reactive.component';

describe('AddStudentFormReactiveComponent', () => {
  let component: AddStudentFormReactiveComponent;
  let fixture: ComponentFixture<AddStudentFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStudentFormReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
