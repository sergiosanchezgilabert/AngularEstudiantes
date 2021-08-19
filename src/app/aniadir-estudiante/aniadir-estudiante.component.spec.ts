import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirEstudianteComponent } from './aniadir-estudiante.component';

describe('AniadirEstudianteComponent', () => {
  let component: AniadirEstudianteComponent;
  let fixture: ComponentFixture<AniadirEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniadirEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
