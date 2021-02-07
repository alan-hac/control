import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcStatusComponent } from './pc-status.component';

describe('PcStatusComponent', () => {
  let component: PcStatusComponent;
  let fixture: ComponentFixture<PcStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
