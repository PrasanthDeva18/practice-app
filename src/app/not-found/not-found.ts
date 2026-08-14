import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound implements OnInit {
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    console.log(this.id);
  }
}
