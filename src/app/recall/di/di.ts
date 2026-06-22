import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  inject,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DiService } from './di.service';
import { DI2Service } from './di-2.service';
import { Di2 } from './di-2/di-2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-di',
  imports: [Di2],
  templateUrl: './di.html',
  styleUrl: './di.css',
  // providers: [{ provide: DI2Service, useClass: DI2Service }],
})
export class Di implements OnInit, AfterViewInit {
  di2Service = inject(DI2Service);
  totalValue!: number;

  route = inject(ActivatedRoute);
  router = inject(Router);

  @ViewChild('Di2')
  child!: Di2;

  @ViewChild('ipval')
  ipval!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    console.log(this.child?.name);
  }

  subVal() {
    console.log('Hello');

    this.ipval.nativeElement.value = '20';
  }

  userName: string = 'Prasanth';

  // dependencyInjectionResult = inject(DiService).add(1, 2);

  //Without Dependency Injection
  //  diService = new DiService();

  //  add () {
  //   this.diService.add(5,10)
  //  }

  ngOnInit() {
    this.totalValue = this.di2Service.call();

    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

  viewValue(val: any) {
    console.log(val.name);

    this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe;
  }

  addQ() {
    this.router.navigate(['/di'], {
      relativeTo: this.route,
      queryParams: {
        page: 1,
      },
    });
  }

  mergeQ() {
    this.router.navigate(['/di'], {
      relativeTo: this.route,
      queryParams: {
        offset: 1,
      },
      queryParamsHandling: 'merge',
    });
  }

  // constructor(private diService: DiService, @Inject(DiService) private diServiceInjected: DiService) {}
}
