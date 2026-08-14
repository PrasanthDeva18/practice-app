import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-demo',
  template: `<div>
    Hello
    <button (click)="updateParams()">add query</button>
    <button (click)="replaceParams()">replace query</button>
    <button (click)="mergeParams()">Merge query</button>

    <button (click)="relativeToParams()">Relative query</button>
  </div> `,
  styles: '',
})
export class RouteDemo implements OnInit {
  route = inject(ActivatedRoute);

  router = inject(Router);

  id = this.route.snapshot.paramMap.get('id');

  id2 = this.route.paramMap.subscribe((p) => p.get('id')); // best way to use that

  id3 = this.route.params.subscribe((p) => p['id']);

  queryParamValPage!: string | null;
  queryParamValOffset!: string | null;

  queryParamValPageSnapShot!: string | null;
  queryParamValOffsetSnapShot!: string | null;

  constructor() {
    // we can use queryParamsMap instead of queryParams
    this.route.queryParams.subscribe((q) => {
      this.queryParamValPage = q['page'];
      this.queryParamValOffset = q['offset'];
    });

    // we can use queryParamsMap instead of queryParams

    this.queryParamValOffsetSnapShot = this.route.snapshot.queryParams['offset'];
    this.queryParamValPageSnapShot = this.route.snapshot.queryParams['page'];
  }

  ngOnInit(): void {
    console.log(this.id);

    console.log(this.id2);

    console.log(this.queryParamValPage);
    console.log(this.queryParamValOffset);
    console.log(this.queryParamValOffsetSnapShot);
    console.log(this.queryParamValPageSnapShot);
  }

  updateParams() {
    this.router.navigate(['/product', this.id], {
      queryParams: {
        page: 1,
      },
    });
  }

  replaceParams() {
    this.router.navigate(['/product', this.id], {
      queryParams: {
        offset: 1,
      },
    });
  }

  mergeParams() {
    this.router.navigate(['/product', this.id], {
      queryParams: {
        page: 1,
      },
      queryParamsHandling: 'merge',
    });
  }

  //   relativeTo used in if the component /product

  relativeToParams() {
    this.router.navigate([this.id], {
      relativeTo: this.route,
    });

    // used when full parameter of strings
    this.router.navigateByUrl('');
  }
}
