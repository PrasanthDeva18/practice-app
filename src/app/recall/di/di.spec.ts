import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Di } from './di';

describe('Di', () => {
  let component: Di;
  let fixture: ComponentFixture<Di>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Di]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Di);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
