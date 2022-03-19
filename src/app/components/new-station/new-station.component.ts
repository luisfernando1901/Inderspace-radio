import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-station',
  templateUrl: './new-station.component.html',
  styleUrls: ['./new-station.component.css']
})
export class NewStationComponent implements OnInit {
  // in app.component.ts
  files: File[] = [];
  audioInputNumber: number[] = [1];
  //Formulario para agregar una nueva estación
  newStationForm = this.fb.group({
    stationName: [''],
    audios: this.fb.array([this.fb.control('')])
  });

  get audios() {
    return this.newStationForm.controls["audios"] as FormArray;
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  //Método para agregar un nuevo campo de agregar audio
  addFileInput(){
    const audioForm = this.fb.group({
      title: [, Validators.required],
      audioSrc: [, Validators.required]
  });

  this.audios.push(audioForm);
  }

}
