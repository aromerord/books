import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game, Person } from 'src/app/interfaces/person.interface';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent {

  protected basics: boolean;
  protected dinamics: boolean;
  protected switches: boolean;
  protected initFormBasic: any;
  protected person: Person;
  protected newGame: string;

  @ViewChild('formBasic') formBasic!: NgForm;
  @ViewChild('formDinamic') formDinamic!: NgForm;
  @ViewChild('formSwitches') formSwitches!: NgForm;

  constructor() {
    this.basics = true;
    this.dinamics = false;
    this.switches = false;
    this.newGame = '';
    this.initFormBasic = {
      product: '',
      price: 0,
      stock: 0
    };

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

  protected handleBasics(): void {
    this.basics = true;
    this.dinamics = false;
    this.switches = false;
  }

  protected handleDinamics(): void {
    this.basics = false;
    this.dinamics = true;
    this.switches = false;
  }

  protected handleSwitches(): void {
    this.basics = false;
    this.dinamics = false;
    this.switches = true;
  }

  protected invalidProduct(): boolean {
    return this.formBasic?.controls['product']?.invalid && 
      this.formBasic?.controls['product']?.touched;
  }

  protected invalidPrice(): boolean {
    return this.formBasic?.controls['price']?.touched && 
      this.formBasic?.controls['price']?.value < 0;
  }

  protected saveBasics() {
    console.log(this.formBasic);
    this.formBasic.resetForm({
      price: 0,
      stock: 0
    }); // Resetea el formulario
  }

  protected invalidName(): boolean {
    return this.formDinamic?.controls['name']?.invalid && 
      this.formDinamic?.controls['name']?.touched;
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

  protected saveDinamics() {
    console.log(this.formDinamic);
  }
  


}
