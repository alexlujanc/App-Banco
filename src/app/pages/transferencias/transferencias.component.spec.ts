import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciasComponent } from './transferencias.component';

describe('TransferenciasComponent', () => {
  let component: TransferenciasComponent;
  let fixture: ComponentFixture<TransferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenciasComponent]
    });
    fixture = TestBed.createComponent(TransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
