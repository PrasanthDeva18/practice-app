import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DiService {
    add(a: number, b: number): number {
        return a + b;
    }
}
