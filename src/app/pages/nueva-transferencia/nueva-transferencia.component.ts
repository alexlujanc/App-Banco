import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent {

  nombreDestinatario: string = ""
  cuentaDestino: number|null = null;
  concepto: string = ""
  importe: number = 0;

  constructor(private localStorage:LocalStorageService) {}

  guardarDatos(): void {
    localStorage.setItem('nombreDestinatario', this.nombreDestinatario);
    localStorage.setItem('cuentaDestino', JSON.stringify(this.cuentaDestino));
    localStorage.setItem('concepto', this.concepto);
    localStorage.setItem('importe', JSON.stringify(this.importe));

    // Restablecer los valores del formulario
    this.nombreDestinatario = '';
    this.cuentaDestino = null;
    this.concepto = '';
    this.importe = 0;
  }
  
}
