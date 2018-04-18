import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider 
{

  constructor(private afAuth :  AngularFireAuth) 
  {
    console.log('Hello AuthProvider Provider');
  }

  // User Register
  registerUser(email:string, password:string)
  {
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then((res)=>{ })
    .catch(err=>Promise.reject(err))
  }

  // User Login
  loginUser(email:string, password:string)
  {
   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     .then(user=>Promise.resolve(user))
     .catch(err=>Promise.reject(err))
  }

  //User Check
  checkUser(email:string, password:string)
  {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     .then(user=>Promise.resolve(user))
     .catch(err=>Promise.reject(err))
  }

 // Get Session
 get Session()
 {
  return this.afAuth.authState;
 }

 // User Logout
 logout()
 {
   this.afAuth.auth.signOut().then(()=>{ })
 }



}