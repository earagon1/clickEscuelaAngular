import { Session } from './../models/session';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

token: Token;
constructor() {

}

getToken(session: Session) {
  
  const authDate = moment(new Date().toString());
  const expiration = authDate.add(1, 'minutes');
  const token = new Token(session.token, authDate.toString(), expiration.toString(),session.profile);

  return token;
}

}
