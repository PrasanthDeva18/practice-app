import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Di2 } from './di-2';

describe('Di2', () => {
  let component: Di2;
  let fixture: ComponentFixture<Di2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Di2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Di2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
