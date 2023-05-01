import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetLayoutComponent } from './bet-layout.component';

describe('BetLayoutComponent', () => {
  let component: BetLayoutComponent;
  let fixture: ComponentFixture<BetLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
