import {Component, OnInit} from '@angular/core';
import {BpmnDiffService} from "../../service/bpmn-diff.service";

@Component({
  selector: 'mrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private bpmnDiffService: BpmnDiffService) {
  }

  ngOnInit(): void {
  }

  onClick(value: string) {
    this.bpmnDiffService.getBpmnDiffs(value).subscribe(response => {
      console.log(response);
    })
  }
}
