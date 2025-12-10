import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'basic-page',
  imports: [ JsonPipe, ReactiveFormsModule ],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {

  fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  isValidField( fieldName: string ): boolean | null {
    return !!this.myForm.controls[fieldName].errors;
  }

  getFieldError( fieldName: string ): string | null {
    if ( !this.myForm.controls[fieldName] ) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {}

    for( const key of Object.keys(errors) ) {
      switch(key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${ errors['minlength'].requiredLength } caracteres`;
        case 'min':
          return `Mínimo de ${ errors['min'].min } caracteres`;
        default:
      }
    }

    return null;
  }

}
