import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  login(email: string, passwrod:string){
    const url = `${this.baseUrl}/auth`
    
    const body = {email, passwrod}
    
    return this.http.post<AuthResponse>(url,  body)
  }
}
