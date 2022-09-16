import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  formulario: FormGroup

    constructor() {
        this.formulario = new FormBuilder().group({
            mail: ['', Validators.required],
        })
    }

    ngOnInit(): void {
    }

    enviarFormulario(){
        console.log("Enviando...")
        console.log(this.formulario)
    }


}
