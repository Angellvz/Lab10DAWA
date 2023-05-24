import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  formularioValido: boolean = false;
  emailValido: boolean = false;

  verificarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailValido = emailRegex.test(this.email);
  }

  verificarFormulario(form: NgForm) {
    form.control.markAllAsTouched();
  }
  mostrarConfirmacion(event: Event) {
    if (!confirm('¿Estás seguro de enviar el formulario?')) {
      event.preventDefault(); // Evitar el envío del formulario
    }
  }
  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
  }
}
