import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe, TransformPipe } from './reverse-pipe';
import { DI2Service } from '../di/di-2.service';
import { Http } from '../http/http';

type EmpDetails = {
  empName: string;
  empId: number;
  empArea: string;
  isActive: boolean;
};

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, ReversePipe, TransformPipe, Http],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes implements OnInit {
   service = inject(DI2Service).call()
  constructor(private cdr: ChangeDetectorRef) {}
  userName: string = 'Prasanth';

  empInOfficePercentage = 0.4;
  empQuaterInc = 1.7456;
  employeeDetails: EmpDetails[] = [
    { empName: 'Prasanth', empId: 3668, empArea: 'Perungudi', isActive: true },
    { empName: 'Vennila', empId: 3669, empArea: 'Erode', isActive: true },
    { empName: 'Test2', empId: 3670, empArea: 'Test23', isActive: true },
    { empName: 'Test3', empId: 3671, empArea: 'Test24', isActive: true },
  ];

  ageArr = [21, 18, 22, 23, 24, 25];

  collectionColorCodes = [
    '#2563EB', // Deep Blue
    '#10B981', // Emerald Green
    '#F59E0B', // Amber
    '#F43F5E', // Rose Red
    '#8B5CF6', // Violet
  ];

  selectColor: string = this.collectionColorCodes[0];

  currentIndex = 0;

  ngOnInit(): void {
    // setInterval(() => {
    //   this.currentIndex = (this.currentIndex + 1) % this.collectionColorCodes.length;
    //   this.selectColor = this.collectionColorCodes[this.currentIndex];
    //   console.log(this.selectColor);
    //   this.cdr.detectChanges();
    // }, 2000);
  }

  joinedDate = new Date('2002-08-24');

  saveEmpDetails(): void {}

  isShowMenu!: boolean;

  roleName = 'admin';

  toShowMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  showClassColor: boolean = true;

  colorClass = 'show-red';
}
