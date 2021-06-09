import { Component, OnInit } from '@angular/core';
import { TopPageService } from '../../../services/pages/top-page.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  msg: string = '';

  constructor(private topPageService: TopPageService) { }

  ngOnInit(): void {
    
  }

  /**
   * 
   */
  onButtonClick() {
    this.topPageService.getMsg().subscribe(
      res => {
        this.msg = res;
      }
    );
  }

}
