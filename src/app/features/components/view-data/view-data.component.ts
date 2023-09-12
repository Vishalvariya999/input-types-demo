import { Component, OnInit } from '@angular/core';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent implements OnInit {
  public userDatas: any = [];
  public deleteId!: number;

  constructor(private inputService: InputService) {}

  ngOnInit(): void {
    this.getData();
  }
  public getData() {
    this.userDatas = this.inputService.userData;
    console.log('this.userDatas', this.userDatas);
  }

  public onSendId(id: number) {
    console.log('id', id);
    this.deleteId = id;
  }

  public deleteReoced() {
    this.inputService.deleteReco(this.deleteId);
    this.getData();
  }
}
