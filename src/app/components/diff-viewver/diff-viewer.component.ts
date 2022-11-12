import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import BpmnViewer from "bpmn-js/lib/NavigatedViewer";
import {BpmnDiff} from "../../model/bpmn-diff.model";

@Component({
  selector: 'mrd-diff-viewer',
  templateUrl: './diff-viewer.component.html',
  styleUrls: ['./diff-viewer.component.less']
})
export class DiffViewerComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {

  @Input()
  bpmnDiff: BpmnDiff

  private leftViewer: BpmnViewer;
  private rightViewer: BpmnViewer;

  @ViewChild('left', {static: true}) private leftEl: ElementRef;
  @ViewChild('right', {static: true}) private rightEl: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.leftViewer = this.initViewer()
    this.rightViewer = this.initViewer()
  }

  ngAfterContentInit(): void {
    this.leftViewer.attachTo(this.leftEl.nativeElement);
    this.rightViewer.attachTo(this.rightEl.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.leftViewer.importXML(this.bpmnDiff.oldXml)
    this.rightViewer.importXML(this.bpmnDiff.newXml)
  }

  ngOnDestroy(): void {
    // destroy BpmnJS instance
    this.leftViewer.destroy();
  }

  private initViewer() {
    return new BpmnViewer({
      height: "100%",
      width: "100%",
      canvas: {
        deferUpdate: false
      }
    });
  }
}
