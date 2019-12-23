import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  async signUp(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  async signIn(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async signInGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async signOut() {
    return this.angularFireAuth.auth.signOut();
  }
}
