import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ResponseContent } from '../models/ResponseContent';
import { Content } from '../models/Content';
import { environment } from 'src/environments/environment';


type Params = {
  $top?: number;
  $skip?: number;
  $filter?: string;
  $orderby?: string
}

@Injectable({
  providedIn: 'root'
})
export class PrestadoresService {
}
