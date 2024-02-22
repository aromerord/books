import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesFormsComponent } from './switches-forms.component';

describe('SwitchesFormsComponent', () => {
  let component: SwitchesFormsComponent;
  let fixture: ComponentFixture<SwitchesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchesFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
