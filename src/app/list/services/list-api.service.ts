import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  constructor(private httpService: HttpClient) {
  }

  getItems(): Observable<any> {
    const localStorageItem = JSON.parse(localStorage.getItem('listItems'));
    return localStorageItem === null ?
      this.httpService.get('assets/items.json') : of(localStorageItem.listItems);
  }
}
