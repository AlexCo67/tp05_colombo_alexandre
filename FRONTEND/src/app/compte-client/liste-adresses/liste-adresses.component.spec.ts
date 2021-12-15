import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdressesComponent } from './liste-adresses.component';

describe('ListeAdressesComponent', () => {
  let component: ListeAdressesComponent;
  let fixture: ComponentFixture<ListeAdressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
