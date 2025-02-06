import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEjemploComponent } from './new-ejemplo.component';

describe('NewEjemploComponent', () => {
  let component: NewEjemploComponent;
  let fixture: ComponentFixture<NewEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
