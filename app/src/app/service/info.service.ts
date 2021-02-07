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
    return this.http.get<Systeminformation.CpuData>('api/info/cpu');
  }

  getMotherboard(): Observable<Systeminformation.BaseboardData> {
    return this.http.get<Systeminformation.BaseboardData>('api/info/mb');
  }

  getChassis(): Observable<Systeminformation.ChassisData> {
    return this.http.get<Systeminformation.ChassisData>('api/info/ch');
  }

  getTemperature(): Observable<Systeminformation.CpuTemperatureData> {
    return this.http.get<Systeminformation.CpuTemperatureData>('api/info/temp');
  }

  getMemory(): Observable<Systeminformation.MemData> {
    return this.http.get<Systeminformation.MemData>('api/info/mem');
  }

  getMemoryLayout(): Observable<Array<any>> {
    return this.http.get<Array<any>>('api/info/mem-layout')
  }

  getDisk(): Observable<Array<Systeminformation.FsSizeData>> {
    return this.http.get<Array<Systeminformation.FsSizeData>>('api/info/disk');
  }

  getOperationalSystem(): Observable<Systeminformation.OsData> {
    return this.http.get<Systeminformation.OsData>('api/info/os');
  }

}
