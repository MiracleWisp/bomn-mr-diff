import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {BpmnDiff} from "../../model/bpmn-diff.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'mrd-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.less']
})
export class FileSelectorComponent implements OnInit, OnChanges {

  @Input()
  bpmnDiffs: BpmnDiff[] = []

  @Output()
  fileChange: EventEmitter<BpmnDiff> = new EventEmitter<BpmnDiff>()

  form = new FormGroup({
    file: new FormControl(),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.setValue({file: this.bpmnDiffs[0]})
  }


}
