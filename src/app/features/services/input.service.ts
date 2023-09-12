import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  public userData: any = [
    {
      id: 1,
      fname: 'Vishal',
      lname: 'Variya',
      gender: 'Male',
      dob: '2003-02-10',
      email: 'test@gmail.com',
      mobile: '8856577454',
      address: {
        city: 'Surat',
        state: 'Gujarat',
        country: 'Bharat',
      },
      hobbies: ['Reading', 'Writing'],
      course: 'BCA',
      range: 85,
      fcolor: '#19d269',
      hnumber: '401, Man complex',
      pic: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg',
    },
    {
      id: 2,
      fname: 'Parag',
      lname: 'Tank',
      gender: 'Male',
      dob: '2003-02-10',
      email: 'tank@gmail.com',
      mobile: '8856577454',
      address: {
        city: 'Mumbai',
        state: 'Maharashra',
        country: 'Bharat',
      },
      hobbies: ['Reading', 'Writing'],
      course: 'BCA',
      range: 74,
      fcolor: '#19d269',
      hnumber: 'Magan Nagar',
      pic: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg',
    },
    {
      id: 3,
      fname: 'Jaydeep',
      lname: 'Variya',
      gender: 'Male',
      dob: '2003-02-10',
      email: 'jaydeep@gmail.com',
      mobile: '9965655232',
      address: {
        city: 'Surat',
        state: 'Gujarat',
        country: 'Bharat',
      },
      hobbies: ['Reading', 'Writing'],
      course: 'COM.Eng',
      range: 70,
      fcolor: '#19d269',
      hnumber: 'Sita nagar',
      pic: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg',
    },
  ];

  constructor() {}

  public addData(data: any) {
    return this.userData.push(data);
  }

  public deleteReco(id: number) {
    const newArray = this.userData.filter((d: any) => {
      return d.id !== id;
    });
    return (this.userData = newArray);
  }
}
