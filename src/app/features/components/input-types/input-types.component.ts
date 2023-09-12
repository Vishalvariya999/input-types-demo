import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { InputService } from '../../services/input.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-types',
  templateUrl: './input-types.component.html',
  styleUrls: ['./input-types.component.scss'],
})
export class InputTypesComponent implements OnInit {
  public frmInput!: FormGroup;
  public hobies: any = [
    { name: 'Reading', value: 'Reading' },
    { name: 'Writing', value: 'Writing' },
    { name: 'Playing', value: 'Playing' },
    { name: 'Danceing', value: 'Danceing' },
  ];
  public thumbColor: string = '#4c0bce';
  constructor(
    private fb: FormBuilder,
    private inputService: InputService,
    private router: Router
  ) {
    this.frmValidation();
  }

  ngOnInit(): void {}

  private frmValidation() {
    this.frmInput = this.fb.group({
      fname: ['Vishal', Validators.required],
      lname: ['Variya', Validators.required],
      gender: ['Male', Validators.required],
      dob: ['2003-02-10', Validators.required],
      email: ['vishal@gmail.com', Validators.required],
      mobile: ['9965655236', Validators.required],
      address: this.fb.group({
        city: ['Surat', Validators.required],
        state: ['Gujarat', Validators.required],
        country: ['Bharat', Validators.required],
      }),
      hobbies: this.fb.array([], [Validators.required]),
      course: ['BCA', Validators.required],
      range: ['', Validators.required],
      fcolor: ['', Validators.required],
      hnumber: ['401, Man complex', Validators.required],
      // profile: ['', Validators.required],
    });
  }

  get fControl() {
    return this.frmInput.controls;
  }

  get fHobbie() {
    return this.fControl['hobbies'] as FormArray;
  }

  public onSelectHobbie(event: any, index: number) {
    console.log('event.target.value', event.target.value);
    const selectedHobbies = this.frmInput.get('hobbies') as FormArray;
    if (event.target.checked) {
      selectedHobbies.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      selectedHobbies.controls.forEach((item: any) => {
        if (item.value == event.target.value) {
          selectedHobbies.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  public onSelectImage(e: any) {
    console.log('e.target.file', e.target.files[0]);
  }

  public onSubmit() {
    if (this.frmInput.invalid) {
      console.log('Invalid details');
      return;
    } else {
      const data = {
        ...this.frmInput.value,
      };
      console.log('this.frmInpu.value :>>', this.frmInput.value);
      this.inputService.addData(data);
      this.router.navigate(['/view-data']);
    }
  }
}
