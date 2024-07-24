import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessModalComponent } from './sucess-modal.component';

describe('SucessModalComponent', () => {
  let component: SucessModalComponent;
  let fixture: ComponentFixture<SucessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
