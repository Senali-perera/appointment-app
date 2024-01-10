import { Component } from '@angular/core';
import {Appointment} from "../models/appointment";
import { FormsModule } from '@angular/forms';
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgForOf
  ],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = []

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id : Date.now(),
        title : this.newAppointmentTitle,
        date : this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
}
