import {Injectable} from '@angular/core';
import {MergeRequestInfo} from "../model/merge-request-info.model";
import {environment} from '../../environments/environment';
import {UrlParseService} from "./url-parse.service";
import {GitlabService} from "./gitlab.service";
import {forkJoin, map, mergeMap, Observable} from "rxjs";
import {BpmnDiff} from "../model/bpmn-diff.model";

@Injectable({
  providedIn: 'root'
})
export class BpmnDiffService {

  private getChangesUrl = `${environment.gitlabUrl}/api/v4/projects/278964/merge_requests/16/changes`

  constructor(private urlParseService: UrlParseService, private gitlabService: GitlabService) {
  }

  public getDiff(mergeRequestInfo: MergeRequestInfo): any {

  }

  public getBpmnDiffs(url: string): Observable<BpmnDiff[]> {
    const mergeRequestInfo = this.urlParseService.parseMrUrl(url)
    return this.gitlabService.getMrChanges(mergeRequestInfo).pipe(
        mergeMap(changes => {
          const requests = changes.changes
          .filter(change => change.new_path.endsWith('.bpmn'))
          .map(change => [
            this.gitlabService.getFile(
                mergeRequestInfo.projectName,
                change.old_path,
                changes.target_branch
            ),
            this.gitlabService.getFile(
                mergeRequestInfo.projectName,
                change.new_path,
                changes.source_branch
            ),
          ]).flat()
          return forkJoin(requests)
        }),
        map(files => {
          const diffs: BpmnDiff[] = []
          for (let i = 0; i < files.length; i += 2) {
            diffs.push({
              name: files[i].file_name,
              oldXml: atob(files[i].content),
              newXml: atob(files[i + 1].content)
            })
          }
          return diffs
        })
    )
  }
}
