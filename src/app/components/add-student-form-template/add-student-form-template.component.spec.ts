import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentFormTemplateComponent } from './add-student-form-template.component';

describe('AddStudentFormTemplateComponent', () => {
  let component: AddStudentFormTemplateComponent;
  let fixture: ComponentFixture<AddStudentFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStudentFormTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
