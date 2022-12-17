import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder) {

    this.form=this.formBuilder.group(
      {
        nombre:['',Validators.required],
        asunto:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        telefono:[,Validators.required]
      }
    )

  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email')
  }
  
  get Nombre(){
    return this.form.get('nombre')
  }

  get Asunto(){
    return this.form.get('asunto')
  }
  
  get Telefono(){
    return this.form.get('telefono')
  }

}
