import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private port = '3001';
  private rootPath = 'http://localhost:' + this.port;
  private getDataPath = this.rootPath + '/test/getData';
  private getUserDetailPath = this.rootPath + '/user/getDetail';
  private updateNotePath = this.rootPath + '/user/updateNoteName';
  parameter:any = {
    params: {},
    responseType: "json"
  }
  constructor(
    private http: TransferHttpService,
  ) { }
  getData(param){
    this.parameter.params = param;
    return this.http.get(this.getDataPath,this.parameter);
  }
  postData(body){
    this.parameter.params = body;
    return this.http.post(this.getDataPath,this.parameter);
  }
  getUserDetail(param){
      this.parameter.params = param;
      return this.http.get(this.getUserDetailPath,this.parameter);
  }
  updateNoteName(body){
    return this.http.post(this.updateNotePath,body);
  }
}
