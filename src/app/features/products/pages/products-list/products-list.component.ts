import {Component} from '@angular/core';
import {ProductTableComponent} from '../../components/product-table/product-table.component';

@Component({
  standalone: true,
  imports: [ProductTableComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.less'
})
export class ProductsListComponent {

}
