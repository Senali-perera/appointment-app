import { Component } from '@angular/core';
import {Appointment} from "../models/appointment";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointment: Appointment[] = []

  addAppointment(){
    alert(this.newAppointmentTitle + " " + this.newAppointmentDate)
  }
}
