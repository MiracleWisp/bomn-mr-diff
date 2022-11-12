import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {MergeRequestInfo} from "../model/merge-request-info.model";

@Injectable({
  providedIn: 'root'
})
export class MergeRequestService {

  public currentMergeRequest$: ReplaySubject<MergeRequestInfo> = new ReplaySubject<MergeRequestInfo>()

  constructor() {
  }
}
