import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, RouterLink],
})
export class ProductsModule {}
