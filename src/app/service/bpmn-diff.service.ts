import {Injectable} from '@angular/core';
import {UrlParseService} from "./url-parse.service";
import {GitlabService} from "./gitlab.service";
import {forkJoin, map, mergeMap, ReplaySubject} from "rxjs";
import {BpmnDiff} from "../model/bpmn-diff.model";

@Injectable({
  providedIn: 'root'
})
export class BpmnDiffService {

  public diffs$: ReplaySubject<BpmnDiff[]> = new ReplaySubject<BpmnDiff[]>()

  constructor(private urlParseService: UrlParseService, private gitlabService: GitlabService) {
  }

  public updateBpmnDiffs(url: string) {
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
    ).subscribe(res =>
        this.diffs$.next(res)
    )
  }
}
