import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';  // Import it up here
import { finalize, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  transactions: Array<any>;

  transactionsUrl = "https://transactions-challenge.stockopedia.com/api/v1/transactions";
  deleteTransactionUrl = "https://transactions-challenge.stockopedia.com/api/v1/transactions/";

  constructor(private http: HttpClient) { }

  getTransaction(id: Number) {
    let x = this.transactions.filter((o: { id: number }) => o.id === id);
    return x[0];
  }

  getCashFlow() {
    if (!this.transactions) {
      return 0;
    }
    let total = 0;
    this.transactions.forEach(function (item, index, object) {
      if (item.type == 'buy' || item.type == 'witdrawl') {
        total -= item.value;
      } else {
        total += item.value;
      }
    });
    return total;
  }

  deleteTransaction(id: Number): Observable<{}> {

    console.log('dataService.deleteTransaction', id);

    // HACK done for visual effects - START
    this.transactions.forEach(function (item, index, object) {
      if (item.id === id) {
        object.splice(index, 1);
      }
    });
    // HACK done for visual effects - END

    return this.http.delete(this.deleteTransactionUrl + id)
      .pipe(
        tap(
          (data: any) => {
            console.log("DATA", data)

          },
          error => console.log("ERROR", error)
        )
      );


  }

  getShares() {
    return this.http.get(this.transactionsUrl)
      .pipe(
        tap(
          (data: any) => {
            this.transactions = data.transactions;
          },
          error => console.log("ERROR", error)
        )
      );
  }

}
