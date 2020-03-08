import { Component, OnInit } from '@angular/core';
import { NamesService } from '../../services/names.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  responseData: any;
  constructor(private namesService: NamesService) { }

  ngOnInit(): void {}

  searchNames = (searchTerm: string) => { 
    this.namesService.getData(searchTerm)
    .subscribe((data: any) => {
      this.responseData = data;
    });
  }

}
