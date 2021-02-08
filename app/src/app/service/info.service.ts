import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Systeminformation } from 'systeminformation';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getCPU(): Observable<Systeminformation.CpuData> {
    return this.http.get<Systeminformation.CpuData>('info/cpu');
  }

  getMotherboard(): Observable<Systeminformation.BaseboardData> {
    return this.http.get<Systeminformation.BaseboardData>('info/mb');
  }

  getSystem(): Observable<Systeminformation.SystemData> {
    return this.http.get<Systeminformation.SystemData>('info/system');
  }

  getTemperature(): Observable<Systeminformation.CpuTemperatureData> {
    return this.http.get<Systeminformation.CpuTemperatureData>('info/temp');
  }

  getMemory(): Observable<Systeminformation.MemData> {
    return this.http.get<Systeminformation.MemData>('info/mem');
  }

  getMemoryLayout(): Observable<Array<any>> {
    return this.http.get<Array<any>>('info/mem-layout')
  }

  getDisk(): Observable<Array<Systeminformation.FsSizeData>> {
    return this.http.get<Array<Systeminformation.FsSizeData>>('info/disk');
  }

  getOperationalSystem(): Observable<Systeminformation.OsData> {
    return this.http.get<Systeminformation.OsData>('info/os');
  }

}
