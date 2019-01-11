import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../catalog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private cataService: CatalogService) { }
dataArray: any = [];
  ngOnInit() {
    this.showCatalog();
  }
  showCatalog() {
    this.cataService.getCatalog().subscribe((fulldata) => {
      this.dataArray = fulldata.data.locations;
      console.log(this.dataArray);
          });
  }
  branch(i) {
    alert(i);
  }

}
