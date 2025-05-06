import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  ticketsVendidos: any[] = [];

  addTicket(ticket: any) {
    this.ticketsVendidos.push(ticket);
  }

  getTickets() {
    return this.ticketsVendidos;
  }
}
