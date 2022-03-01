import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'divisores-front';
  primes = [1, 2];
  numberSelected: any;

  divisors = [1, 2, 5, 6];

  public calculate(): void {
    if (!this.numberSelected || this.numberSelected < 1) {
      Swal.fire('Necessário digitar um número que seja positivo e maior que zero!');
    }
    console.log(this.numberSelected);
  }
}
