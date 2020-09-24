import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFillComponent } from './start-fill.component';

describe('StartFillComponent', () => {
  let component: StartFillComponent;
  let fixture: ComponentFixture<StartFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartFillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
