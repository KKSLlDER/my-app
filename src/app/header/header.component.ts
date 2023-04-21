import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServService } from '../serv.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'autocomplete';

  options = [{title: "Sam"}, {title: "Sammy"}, {title: "Samson"}];/* 

  filteredOptions;

  constructor(private service : ServService, private fb : FormBuilder){}

  ngOnInit(){
    this.initForm();
    this.getNames();

  }

  initForm(){
    this.formGroup = this.fb.group({
      'employee' : ['']
    })
    this.formGroup.get('employee').valueChanges.subscribe(response => {
      this.filterData(response);
    })
  }
  
  filterData(enteredData){
    this.options = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames() {
    this.service.getData().subscribe(response => {
      this.options = response;
      this.filteredOptions = response;
    })
  } */

}


