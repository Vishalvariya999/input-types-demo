import { Component, OnInit } from '@angular/core';
import { InputService } from '../../services/input.service';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent implements OnInit {
  public userDatas: any = [];
  public deleteId!: number;
  public imagesDatas: any = [];

  constructor(
    private inputService: InputService,
    private sweetAlertServices: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getData();
    // this.getImageData();
  }
  public getData() {
    // this.userDatas = this.inputService.userData;
    this.inputService.getData().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.userDatas = res.map((data: any) => {
          const resData = {
            id: data.payload.doc.id,
            ...data.payload.doc.data(),
          };
          return resData;
        });
        console.log('this.userDatas', this.userDatas);
      },
      error: (err: any) => {
        console.log('err', err);
      },
    });
  }

  public onSendId(id: number) {
    console.log('id', id);
    this.deleteId = id;
  }

  public deleteReoced() {
    this.inputService
      .deleteReco(this.deleteId)
      .then((res: any) => {
        console.log('res', res);
        this.sweetAlertServices.success('Delete successfully.!');
      })
      .catch((err: any) => {
        console.log('err', err);
        this.sweetAlertServices.error('Delete unsuccessfully.!');
      });
    this.getData();
  }

  // public getImageData() {
  //   this.inputService.getImageData().subscribe({
  //     next: (res: any) => {
  //       console.log('res-images :>>', res);
  //       this.imagesDatas = res;
  //     },
  //     error: (err: any) => {
  //       console.log('err-images :>>', err);
  //     },
  //   });
  // }
}
