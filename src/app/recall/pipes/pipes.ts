import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse-pipe';

type EmpDetails = {
  empName: string;
  empId: number;
  empArea: string;
  isActive: boolean;
};

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, ReversePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  userName: string = 'Prasanth';

  empInOfficePercentage = 0.40;
  empQuaterInc = 1.7456;
  employeeDetails: EmpDetails[] = [
    { empName: 'Prasanth', empId: 3668, empArea: 'Perungudi', isActive: true },
    { empName: 'Vennila', empId: 3669, empArea: 'Erode', isActive: true },
    { empName: 'Test2', empId: 3670, empArea: 'Test23', isActive: true },
    { empName: 'Test3', empId: 3671, empArea: 'Test24', isActive: true },
  ];

  joinedDate = new Date('2002-08-24');

  saveEmpDetails(): void {}
}
