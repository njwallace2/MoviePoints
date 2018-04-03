import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { PointProvider } from '../../providers/point/point';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  developer = {};
  developers = [];

  constructor(public navCtrl: NavController, private alertController: AlertController, private pointProvider: PointProvider, private localStorageProvider: LocalStorageProvider, private platform: Platform) {
    this.localStorageProvider.getDatabaseState().subscribe(rdy => {
      if (rdy){
        this.loadDeveloperData();
      }

    })
  }

  loadDeveloperData() {
    this.localStorageProvider.getAllDevelopers().then(data => {
      this.developers = data;
    })
  }

  addDeveloper() {
    this.localStorageProvider.addDeveloper(this.developer['name'], this.developer['skill'], parseInt(this.developer['yearsOfExperience']))
      .then(data => {
        this.loadDeveloperData();
      });
    this.developer = {};
  }

}
