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

  myForm = this.fb.group({
    name: ['', [Validators.required]],
    price: [0],
    inStorage: [0],
  })

}
