import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

export interface Transaction {
  cashflow: number
  date: string
  id: number
  security: string
  shares: number
  type: string
  value: number
}
@Component({
  selector: 'app-edit-share',
  templateUrl: './edit-share.component.html',
  styleUrls: ['./edit-share.component.sass']
})
export class EditShareComponent implements OnInit {

  id: number;

  transaction: Transaction ;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('ngOnInit ID', this.id);
    this.transaction = this.dataService.getTransaction(this.id)
    console.log("ngOnInit getTransaction", this.transaction);
  }
}
