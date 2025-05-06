import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-punto4',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './punto4.component.html',
  styleUrl: './punto4.component.css',
})
export class Punto4Component {
  fb = inject(FormBuilder);
  ticketService = inject(TicketService);
  tickets = this.ticketService.getTickets();

  ticketForm = this.fb.group({
    dni: [
      '',
      [Validators.required, Validators.minLength(9), Validators.maxLength(12)],
    ],
    precio: [0, [Validators.min(1)]],
    categoriaTurista: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    fecha: ['', [Validators.required]],
  });

  precioCalculado = 0;

  get dni(): FormControl {
    return this.ticketForm.get('dni') as FormControl;
  }

  get precio(): FormControl {
    return this.ticketForm.get('precio') as FormControl;
  }

  get categoriaTurista(): FormControl {
    return this.ticketForm.get('categoriaTurista') as FormControl;
  }

  get email(): FormControl {
    return this.ticketForm.get('email') as FormControl;
  }

  get fecha(): FormControl {
    return this.ticketForm.get('fecha') as FormControl;
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      this.ticketService.addTicket({
        ...this.ticketForm.value,
        precio: this.precioCalculado,
      });
    }
  }

  calcularPrecio(): void {
    if (this.precio.value === 0 && this.categoriaTurista.value === '') return;

    if (this.categoriaTurista.value === 'menor') {
      this.precioCalculado = this.precio.value - this.precio.value * 0.35;
    }

    if (this.categoriaTurista.value === 'jubilado') {
      this.precioCalculado = this.precio.value - this.precio.value * 0.5;
    }

    if (this.categoriaTurista.value === 'adulto') {
      this.precioCalculado = this.precio.value * 1;
    }
  }
}
