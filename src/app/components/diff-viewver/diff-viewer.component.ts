import {
  AfterContentInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import BpmnViewer from "bpmn-js/lib/NavigatedViewer";

@Component({
  selector: 'mrd-diff-viewer',
  templateUrl: './diff-viewer.component.html',
  styleUrls: ['./diff-viewer.component.less']
})
export class DiffViewerComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {

  private leftViewer: BpmnViewer;
  private rightViewer: BpmnViewer;

  // @ts-ignore
  @ViewChild('left', {static: true}) private leftEl: ElementRef;
  // @ts-ignore
  @ViewChild('right', {static: true}) private rightEl: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.leftViewer = this.initViewer()
    this.rightViewer = this.initViewer()
  }

  ngAfterContentInit(): void {
    // attach BpmnJS instance to DOM element
    this.leftViewer.attachTo(this.leftEl.nativeElement);
    this.rightViewer.attachTo(this.rightEl.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {

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
