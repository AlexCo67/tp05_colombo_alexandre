import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieAdresseComponent } from './saisie-adresse.component';

describe('SaisieAdresseComponent', () => {
  let component: SaisieAdresseComponent;
  let fixture: ComponentFixture<SaisieAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieAdresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
