import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { InfoService } from 'src/app/service/info.service';
import { Systeminformation } from 'systeminformation';

@Component({
  selector: 'app-pc-status',
  templateUrl: './pc-status.component.html',
  styleUrls: ['./pc-status.component.scss']
})
export class PcStatusComponent implements OnInit {

  public cpu$!: Observable<Systeminformation.CpuData>;
  public motherboard$!: Observable<Systeminformation.BaseboardData>;
  public chassis$!: Observable<Systeminformation.ChassisData>;
  public temperature$!: Observable<Systeminformation.CpuTemperatureData>;
  public memory$!: Observable<Systeminformation.MemData>;
  public memoryLayout$!: Observable<Array<any>>;
  public disk$!: Observable<Array<Systeminformation.FsSizeData>>;
  public operationalSystem$!: Observable<Systeminformation.OsData>;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void { 
    this.cpu$ = this.infoService.getCPU();
    this.motherboard$ = this.infoService.getMotherboard();
    this.chassis$ = this.infoService.getChassis();
    this.temperature$ = this.infoService.getTemperature();
    this.memory$ = this.infoService.getMemory();
    this.memoryLayout$ = this.infoService.getMemoryLayout();
    this.disk$ = this.infoService.getDisk();
    this.operationalSystem$ = this.infoService.getOperationalSystem();
  }

}
