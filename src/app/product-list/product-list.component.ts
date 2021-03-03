import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catData} from '../cat_data';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  data = '';
  constructor(private router: ActivatedRoute) {}

  @Input() id: number;
  catData = catData;
  toRemove: number;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  removeItem(id: number){
    this.toRemove = id;
  }

  ngOnInit(): void {
    this.data = this.router.snapshot.params.id;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
