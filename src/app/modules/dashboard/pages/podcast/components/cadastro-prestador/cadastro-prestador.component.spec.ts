import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPrestadorComponent } from './cadastro-prestador.component';

describe('CadastroPrestadorComponent', () => {
  let component: CadastroPrestadorComponent;
  let fixture: ComponentFixture<CadastroPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPrestadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
