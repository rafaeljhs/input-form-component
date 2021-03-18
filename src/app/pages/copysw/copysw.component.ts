import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copysw',
  templateUrl: './copysw.component.html',
  styleUrls: ['./copysw.component.scss']
})
export class CopyswComponent implements OnInit {

  input: string;
  text: string;
  textResult1: string;
  textResult2: string;
  constructor() { }

  ngOnInit() {
  }

  colar() {
    this.textResult1 = `"${this.text.toLocaleLowerCase()}":"${this.text}",`
    this.textResult2 = `{{'${this.input}.${this.text.toLocaleLowerCase()}' | translate}}`;
    setTimeout(() => {
      this.copy('textResult1');
    }, 500);
    setTimeout(() => {
      this.copy('textResult2');
    }, 1000);

  }
  copy(myInput) {
    var copyText = null;
    copyText = document.getElementById(myInput);
    if (copyText) {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }
}
