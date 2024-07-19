import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  projects: any = [];

  constructor(
    private data: DatasService
  ){}
  ngOnInit(): void {
   this.projects = this.data.getdata();
  }
  
}
