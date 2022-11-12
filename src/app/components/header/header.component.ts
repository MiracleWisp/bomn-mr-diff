import {Component, OnInit} from '@angular/core';
import {UrlParseService} from "../../service/url-parse.service";

@Component({
  selector: 'mrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private urlParseService: UrlParseService) {
  }

  ngOnInit(): void {
  }

  onClick(value: string) {
    this.urlParseService.parseMrUrl(value)
  }
}
