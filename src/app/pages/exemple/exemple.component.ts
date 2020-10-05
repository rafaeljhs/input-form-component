import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.scss']
})
export class ExempleComponent implements OnInit {
  formSimple: FormGroup;
  submittedSimple = false;
  submittingSimple = false;

  formGroup: FormGroup;
  submitted = false;
  submitting = false;
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Prudente'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formSimple = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
    this.formGroup = this.formBuilder.group({
      ex1: ['', [Validators.required]],
      ex2: ['', [Validators.required]],
      ex3: ['', [Validators.required]],
      ex4: ['', [Validators.required]],
      ex5: [null, [Validators.required]],
      ex6: ['', [Validators.required]],
      ex7: ['', [Validators.required]],
      ex8: ['', [Validators.required]],
      ex9: [false, [Validators.required]],
      ex10: ['', [Validators.required]],
      ex11: ['', [Validators.required]],
      ex12: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.submitting = true;
  }
 
  onSubmit1() {
    this.submittedSimple = true;
    if (this.formSimple.invalid) {
      return;
    }
    this.submittingSimple = true;
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
