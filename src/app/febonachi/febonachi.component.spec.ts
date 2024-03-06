import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebonachiComponent } from './febonachi.component';

describe('FebonachiComponent', () => {
  let component: FebonachiComponent;
  let fixture: ComponentFixture<FebonachiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebonachiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FebonachiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
