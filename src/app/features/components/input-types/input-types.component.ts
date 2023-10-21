import { SweetAlertService } from './../../services/sweet-alert.service';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { InputService } from '../../services/input.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-input-types',
  templateUrl: './input-types.component.html',
  styleUrls: ['./input-types.component.scss'],
})
export class InputTypesComponent implements OnInit {
  // public angularFireStorage = inject(AngularFireStorage);
  public frmInput!: FormGroup;
  public showError: boolean = false;
  public imageSelectEvent: any;
  public path: any;
  public downloadURL!: Observable<any>;

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
    private router: Router,
    private sweetAlertService: SweetAlertService // private angularFireStorage: AngularFireStorage
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
    // console.log('e.target.file :>>', e.target.files[0]);
    this.imageSelectEvent = e.target.files[0];
    console.log('this.imageSelectEvent', this.imageSelectEvent);
  }

  // addImg(event: any) {
  //   const n = Date();
  //   const file = event.target.files[0];
  //   const filePath = `productImg/${n}`;
  //   const fileRef = this.angularFireStorage.ref(filePath);
  //   const task = this.angularFireStorage.upload(`productImg/${n}`, file);
  //   return new Promise((resolve, reject) => {
  //     task
  //       .snapshotChanges()
  //       .pipe(
  //         finalize(() => {
  //           this.downloadURL = fileRef.getDownloadURL();
  //           this.downloadURL.subscribe((url: any) => {
  //             if (url) {
  //               this.path = url;
  //               resolve(this.path);
  //             }
  //           });
  //         })
  //       )
  //       .subscribe((resUrl: any) => {});
  //   });
  // }

  public onSubmit() {
    if (this.frmInput.invalid) {
      console.log('Invalid details');
      return;
    } else {
      // await this.addImg(this.imageSelectEvent);
      // const data = new FormData();
      // data.append('title', 'Test');
      // data.append('date', '2020-02-15');
      // data.append('profile', this.imageSelectEvent);
      // console.log('this.frmInpu.value :>>', this.frmInput.value);
      // this.inputService.postImageData(data).subscribe({
      //   next: (res: any) => {
      //     console.log('res', res);
      //   },
      //   error: (err: any) => {
      //     console.log('err', err);
      //   },
      // });
      const data = {
        // profile: this.path,
        ...this.frmInput.value,
      };
      console.log('this.imageSelectEvent', this.imageSelectEvent);
      this.inputService
        .addData(data)
        .then((res: any) => {
          console.log('res', res);
          this.sweetAlertService.success('Insert successfully.!');
          this.router.navigate(['/view-data']);
        })
        .catch((err: any) => {
          console.log('err', err);
          this.sweetAlertService.error('Some thing went wrong.!');
        });
    }
  }
}
