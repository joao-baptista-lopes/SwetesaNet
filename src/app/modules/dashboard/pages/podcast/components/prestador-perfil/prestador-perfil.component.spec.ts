import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorPerfilComponent } from './prestador-perfil.component';

describe('PrestadorPerfilComponent', () => {
  let component: PrestadorPerfilComponent;
  let fixture: ComponentFixture<PrestadorPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestadorPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestadorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
