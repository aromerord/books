import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game, Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html'
})

export class DynamicFormsComponent {

  protected person: Person;
  protected newGame: string;

  @ViewChild('dynamicForm') dynamicForm!: NgForm;

  constructor() {
    this.newGame = '';

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

  protected invalidName(): boolean {
    return this.dynamicForm?.controls['name']?.invalid && 
      this.dynamicForm?.controls['name']?.touched;
  }

  protected addGame() {
    const game: Game = {
      id: this.person.games!.length + 1,
      name: this.newGame
    }
    if(game.name != ''){
      this.person.games!.push({...game});
      this.newGame = '';
    }
  }

  protected deleteGame(index: number) {
    this.person.games!.splice(index, 1)
  }

  protected savedynamics() {
    console.log(this.dynamicForm);
  }

}
