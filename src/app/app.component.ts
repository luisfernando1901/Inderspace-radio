import { Component, OnDestroy, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { MongodbService } from './services/mongodb/mongodb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  soundSrc: any;
  showCategories = false;
  play = true;
  //Variable que contiene las canciones
  musicPlaylist: any;
  //Variable que indica el número de canción que se está reproduciendo
  audioNumber = 0;
  //Variable que contiene información de la canción
  title = '';
  station = '';
  //Variable para mostrar el modal de registro
  showRegister = false;
  //Variable que guarda la categoría de canción actual
  genrePlaying = '';
  //Categorías de música disponible
  genreTypes = [
    {
      genre: 'Electronic',
      available: true
    },
    {
      genre: 'Blues-Jazz',
      available: true
    },
    {
      genre: 'Mexican-lofi',
      available: true
    },
    {
      genre: 'Chill',
      available: false
    },
    {
      genre: 'Soul',
      available: false
    },
    {
      genre: 'Lofi',
      available: false
    }
  ];
  //Variable que contiene el urlSrc de la imagen de fondo
  bg_image = 'https://storage.googleapis.com/inderspace-music-source/bg-images/background.jpg';

  constructor(private _mongodb: MongodbService) {
    this.getSongs('Electronic');
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.soundSrc.stop();
    this.soundSrc.unload();
  }

  //Método para obtener las canciones de la BD
  async getSongs(genre: string) {
    this.musicPlaylist = await this._mongodb.getSongsByCategory(genre);
    this.bg_image = this.musicPlaylist.songs[this.audioNumber].bgSrc;
    this.genrePlaying = genre;
    let songSrc = this.musicPlaylist.songs[this.audioNumber].audioSrc;
    //Mostramos el título y nombre de la estación
    this.title = this.musicPlaylist.songs[this.audioNumber].title;
    this.station = this.musicPlaylist.songs[this.audioNumber].station;
    this.soundSrc = new Howl({
      src: [songSrc],
      html5: true //Debe estar en true para que no haya error de CORS con el bucket storage
    });
    console.log(this.musicPlaylist);
  }

  //Método para mostrar categorías
  categories() {
    this.showCategories = !this.showCategories;
  }

  //Método para iniciar o pausar la canción
  playPause() {
    if (this.play) {
      console.log("playSong");
      this.soundSrc.play();
    }
    else {
      console.log("pauseSong");
      this.soundSrc.pause();
    }
    this.play = !this.play;
  }

  //Método para avanzar de canción 
  nextSong() {
    console.log("nextSong");
    this.soundSrc.stop();
    this.soundSrc.unload();
    this.audioNumber++;
    if (this.audioNumber >= this.musicPlaylist.songs.length) {
      this.audioNumber = 0;
    }
    this.bg_image = this.musicPlaylist.songs[this.audioNumber].bgSrc;
    let songSrc = this.musicPlaylist.songs[this.audioNumber].audioSrc;
    this.title = this.musicPlaylist.songs[this.audioNumber].title;
    this.station = this.musicPlaylist.songs[this.audioNumber].station;
    this.soundSrc = new Howl({
      src: [songSrc],
      html5: true //Debe estar en true para que no haya error de CORS con el bucket storage
    });
    this.soundSrc.play();
    this.play = false;
  }

  //Metodo para retroceder canción
  previousSong() {
    console.log("previousSong");
    this.soundSrc.stop();
    this.soundSrc.unload();
    this.audioNumber--;
    if (this.audioNumber < 0) {
      this.audioNumber = this.musicPlaylist.songs.length - 1;
    }
    this.bg_image = this.musicPlaylist.songs[this.audioNumber].bgSrc;
    let songSrc = this.musicPlaylist.songs[this.audioNumber].audioSrc;
    this.title = this.musicPlaylist.songs[this.audioNumber].title;
    this.station = this.musicPlaylist.songs[this.audioNumber].station;
    this.soundSrc = new Howl({
      src: [songSrc],
      html5: true //Debe estar en true para que no haya error de CORS con el bucket storage
    });
    this.soundSrc.play();
    this.play = false;
  }

  //Método para registrar a un nuevo usuario
  showRegisterModal() {
    this.showRegister = true;
  }

  //Método para cancelar el registro
  cancelRegister() {
    this.showRegister = false;
  }

  //Método para cambiar de categoría de canciones
  async changeGenreType(genreInfo: any) {
    if (genreInfo.available == true) {
      this.audioNumber = 0;
      this.soundSrc.stop();
      this.soundSrc.unload();
      console.log(genreInfo);
      await this.getSongs(genreInfo.genre)
      this.play = true;
    }
  }

}
