import {Component} from '@angular/core';
import {BpmnDiffService} from "./service/bpmn-diff.service";
import {BpmnDiff} from "./model/bpmn-diff.model";
import {tap} from "rxjs";

@Component({
  selector: 'mrd-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.less']
})
export class AppComponent {

  diffs$ = this.bpmnDiffService.diffs$.pipe(

  )
  currentDiff: BpmnDiff;

  constructor(private bpmnDiffService: BpmnDiffService) {

  }

  fileChange(diff: BpmnDiff) {
    this.currentDiff = diff
  }
}
