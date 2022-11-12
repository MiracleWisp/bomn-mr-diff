import {Injectable} from '@angular/core';
import {MergeRequestInfo} from "../model/merge-request-info.model";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {MergeRequestChanges} from "../model/merge-request-changes.model";
import {Observable} from "rxjs";
import {FileResponse} from "../model/file-response.model";

@Injectable({
  providedIn: 'root'
})
export class GitlabService {

  private getChangesUrl = ``

  constructor(private httpClient: HttpClient) {
  }

  public getMrChanges(mergeRequestInfo: MergeRequestInfo): Observable<MergeRequestChanges> {
    return this.httpClient.get<MergeRequestChanges>(
        `${environment.gitlabUrl}/api/v4/projects/${encodeURIComponent(mergeRequestInfo.projectName)}/merge_requests/${mergeRequestInfo.mergeRequestNumber}/changes`
    )
  }

  public getFile(project: string, filename: string, branch: string): Observable<FileResponse> {
    return this.httpClient.get<FileResponse>(
        `${environment.gitlabUrl}/api/v4/projects/${encodeURIComponent(project)}/repository/files/${encodeURIComponent(filename)}?ref=${branch}`
    )
  }
}
