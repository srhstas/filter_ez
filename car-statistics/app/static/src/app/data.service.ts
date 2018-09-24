import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService {

    get_statistics_url = 'api/statistics/';
    get_rows_url = 'api/get_rows/';

    constructor(private _http: HttpClient) { }

    getStatistics(dataset_id: number): Observable<any> {
        return this._http.get<any>(this.get_statistics_url+dataset_id);
    }

    getRows(dataset_id: number): Observable<any> {
        return this._http.get<any>(this.get_rows_url+dataset_id);
    }
}
