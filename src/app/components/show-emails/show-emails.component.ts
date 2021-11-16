import { Component, OnInit } from '@angular/core';
import { MongodbService } from 'src/app/services/mongodb/mongodb.service';

@Component({
  selector: 'app-show-emails',
  templateUrl: './show-emails.component.html',
  styleUrls: ['./show-emails.component.css']
})
export class ShowEmailsComponent implements OnInit {
  //Array que contiene los correos registrados
  emails:any[] = [];
  constructor(private _mongodb:MongodbService) { }

  ngOnInit(): void {
    this.getEmails();
  }

  async getEmails() {
    let response = await this._mongodb.getRegisteredEmails();
    this.emails = response.emails;
  }

}
