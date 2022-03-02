import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Divisors } from 'src/app/models/divisors';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculatorManagerService {
  private url = `/${environment.CALCULATOR_API}/divisores`;

  constructor(private httpClient: HttpClient) { }
  
  // Método para chamar api
  public getDivisors(selectedNumber: number): Observable<Divisors> {
    const params = new HttpParams().set('selectedNumber', selectedNumber);
    console.log(this.url);
    return this.httpClient.get<Divisors>(this.url, {
      params
    }).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Tratativa de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código: ${error.status}, ` + `mensagem: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  };
}
