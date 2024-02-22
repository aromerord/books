import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-switches-forms',
  templateUrl: './switches-forms.component.html'
})
export class SwitchesFormsComponent {

  protected person: Person;

  @ViewChild('formSwitches') formSwitches!: NgForm;

  constructor() { 
    this.person = {
      name: 'Antonio',
      gender: 'M',
      notifications: true,
      terms: true,
      games: [
        {id: 1, name: 'Age of Empires II'},
        {id: 2, name: 'Starcraft'}
      ]
    }
  }

}
