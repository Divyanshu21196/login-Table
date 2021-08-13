import { Component, OnInit } from '@angular/core';
import data from '../../assets/mocks/strategy.json';  

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  finalData=data.data;
  tableData:any;
  constructor() { }

  ngOnInit(): void {
    this.makeData();

  }

  getData(arr:any,key,value){
    return arr.filter(e=>e[key]===value).reverse();;
 }
  getPeriods(arr){
    return (arr || []).map(e=>e.price);
 }

 makeData(){
  const data = this.getData(this.finalData,"strategies","Infrastructure");
  let res = [];
  res.push({type:"Infrastructure",periods:this.getPeriods(data)});
  const data2 = this.getData(this.finalData,"strategies","Real Estate");
  res.push({type:"Real Estate",periods:this.getPeriods(data2)});
  const data3 = this.getData(this.finalData,"strategies","LBO");
  res.push({type:"LBO",periods:this.getPeriods(data3)});
  this.tableData = res;
  console.log(res);

 }

}
