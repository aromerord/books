import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html'
})

export class BasicFormsComponent {

  protected initBasicForm: any;

  @ViewChild('basicForm') basicForm!: NgForm;

  constructor() {
    this.initBasicForm = {
      product: '',
      price: 0,
      stock: 0
    };
   }

  protected invalidProduct(): boolean {
    return this.basicForm?.controls['product']?.invalid && 
      this.basicForm?.controls['product']?.touched;
  }

  protected invalidPrice(): boolean {
    return this.basicForm?.controls['price']?.touched && 
      this.basicForm?.controls['price']?.value < 0;
  }

  protected saveBasics() {
    console.log(this.basicForm);
    this.basicForm.resetForm({
      price: 0,
      stock: 0
    }); // Resetea el formulario
  }

}
