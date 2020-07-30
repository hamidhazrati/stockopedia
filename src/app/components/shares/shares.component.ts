import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TransType } from '../edit-share/edit-share.component';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.sass']
})
export class SharesComponent implements OnInit, AfterContentChecked {
  totalCashFlow: number;
  transactionDeleted = false;
  shares: Object;
  tTransType = TransType;

  constructor(private dataSerive: DataService) { }

  ngOnInit() {
    this.shares = this.dataSerive.getShares();
  }

  deleteTransaction(id: number, s) {

    console.log('deleteTransaction this.shares, id', s, id)

    let x = this.dataSerive.deleteTransaction(id).subscribe();

    console.log('yyy deleteTransaction deleted x=', x);

    this.transactionDeleted = true;

    setTimeout(() => this.transactionDeleted = false, 2000)

  }

  ngAfterContentChecked() {
    this.totalCashFlow = this.dataSerive.getCashFlow();
  }
}
