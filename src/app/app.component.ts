import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';

  constructor(){
    var firebaseConfig = {
    apiKey: "AIzaSyD7y8sM9_erV4BtMuB5hXbuJIunVHZ8lq8",
    authDomain: "booklist-e1531.firebaseapp.com",
    databaseURL: "https://booklist-e1531.firebaseio.com",
    projectId: "booklist-e1531",
    storageBucket: "",
    messagingSenderId: "731307840724",
    appId: "1:731307840724:web:e7024050dd9d7775b3d741",
    measurementId: "G-VWBP94SS85"
  };
    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
  }
}
