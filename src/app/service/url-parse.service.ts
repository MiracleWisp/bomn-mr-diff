import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {MergeRequestInfo} from "../model/merge-request-info.model";

@Injectable({
  providedIn: 'root'
})
export class UrlParseService {

  private urlRegexp = new RegExp(/\/(.*)\/-\/merge_requests\/(\d+)/)
  private urlWithoutProtocol = environment.gitlabUrl
  .replace('https://', '')
  .replace('http://', '')

  public parseMrUrl(url: string): MergeRequestInfo {
    url = url.substring(url.indexOf(environment.gitlabUrl) + environment.gitlabUrl.length)
    const match = url.match(this.urlRegexp) || [];
    console.log('match:', match);
    if (match[0] == null || match[1] == null) throw ''
    return {
      projectName: match[1],
      mergeRequestNumber: match[2]
    }
  }
}
