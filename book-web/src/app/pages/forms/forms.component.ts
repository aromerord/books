import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent {

  protected basics: boolean;
  protected dynamics: boolean;
  protected switches: boolean;

  constructor() {
    this.basics = true;
    this.dynamics = false;
    this.switches = false;
   }

  protected handleBasics(): void {
    this.basics = true;
    this.dynamics = false;
    this.switches = false;
  }

  protected handleDynamics(): void {
    this.basics = false;
    this.dynamics = true;
    this.switches = false;
  }

  protected handleSwitches(): void {
    this.basics = false;
    this.dynamics = false;
    this.switches = true;
  }

}
