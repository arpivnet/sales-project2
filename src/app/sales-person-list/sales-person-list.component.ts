import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  // creating manually array of objects:
  
  
  salePersonList: SalesPerson[] = [
    new SalesPerson('John', 'Smith', 'john@mail.com', 1000),
    new SalesPerson('Satya', 'SmNadella', 'satya@microsoft.com', 2000),
    new SalesPerson('Elon', 'Mask', 'elon@tesla.com', 3000),
  ];

  constructor() {}

  ngOnInit(): void {}
}
