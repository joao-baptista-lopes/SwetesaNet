import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticaEspecificaComponent } from './notica-especifica.component';

describe('NoticaEspecificaComponent', () => {
  let component: NoticaEspecificaComponent;
  let fixture: ComponentFixture<NoticaEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticaEspecificaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticaEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
