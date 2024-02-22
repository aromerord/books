import { Directive, Input } from "@angular/core";
import { FormControl, Validators, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]', // Solo se va a ejecutar la directiva si el input tiene esos dos elementos
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validators {

    @Input() minValue!: number;

    validate(control: FormControl) {
        const inputValue = control.value;
        return (inputValue < this.minValue ) ? {'customMin': true} : null;
    }

}