import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  network_exist: any;

  constructor(public navCtrl: NavController, private network: Network) {
    this.network_exist = this.network.type != 'none';
    this.network.onDisconnect().subscribe(() => {
      // alert('network was disconnected :-(');
      this.network_exist = false;
    });
    this.network.onConnect().subscribe(() => {
      // alert('network connected!');
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        // alert('we got a wifi connection, woohoo!');
        this.network_exist = true;
      }, 3000);
    });

  }
  ionViewDidLoad() {    
  }

}
