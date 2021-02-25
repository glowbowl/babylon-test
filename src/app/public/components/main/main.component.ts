import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  selectedVal: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange(val: string) {
    this.selectedVal = val;
  }


}
