import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Divisors } from './models/divisors';
import { CalculatorManagerService } from './services/calculator-manager.service';

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

  constructor(private calculatorService: CalculatorManagerService) {}

  public async calculate(): Promise<void> {
    if (!this.numberSelected || this.numberSelected < 1) {
      Swal.fire('Necessário digitar um número que seja positivo e maior que zero!');
    }
    console.log(this.numberSelected);

    this.calculatorService.getDivisors(this.numberSelected).subscribe((divisorsAndPrimes: Divisors) => {
      console.log(divisorsAndPrimes);
      this.divisors = divisorsAndPrimes.divisors;
      this.primes = divisorsAndPrimes.primes;
    }, (error: string) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      });
    });
  }
}
