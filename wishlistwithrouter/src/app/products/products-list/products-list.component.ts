import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];

  constructor(private store: ProductsService) {}

  ngOnInit(): void {
    this.store.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
