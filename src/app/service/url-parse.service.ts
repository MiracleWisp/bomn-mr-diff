import {Injectable} from '@angular/core';
import {MergeRequestService} from "./merge-request.service";

@Injectable({
  providedIn: 'root'
})
export class UrlParseService {


  constructor(private mergeRequestService: MergeRequestService) {
  }

  public parseMrUrl(url: string) {
    const match = url.match(/gitlab.com\/(.*)\/-\/merge_requests\/(\d+)/) || [];
    if (match[0] == null || match[1] == null) return
    this.mergeRequestService.currentMergeRequest$.next({
      projectName: match[1],
      mergeRequestNumber: match[2]
    })
  }
}
