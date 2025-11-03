import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElse } from './if-else';

describe('IfElse', () => {
  let component: IfElse;
  let fixture: ComponentFixture<IfElse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
