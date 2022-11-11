/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class uploadimg {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_uploadimg

  async sd_tSrRS7Awj4V5e6vw(clientbody: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          clientbody: clientbody,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_6sZhAT48I4Mq10A1(bh);
      //appendnew_next_sd_tSrRS7Awj4V5e6vw
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tSrRS7Awj4V5e6vw');
    }
  }

  //appendnew_flow_uploadimg_start

  async sd_6sZhAT48I4Mq10A1(bh) {
    try {
      bh.input.formData = new FormData();
      bh.input.formData.append('file', bh.input.clientbody);
      bh = await this.sd_p0NOg8HMTSajqUP3(bh);
      //appendnew_next_sd_6sZhAT48I4Mq10A1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6sZhAT48I4Mq10A1');
    }
  }

  async sd_p0NOg8HMTSajqUP3(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/upload',
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.formData,
      };
      bh.resulttt = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_p0NOg8HMTSajqUP3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p0NOg8HMTSajqUP3');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_uploadimg_Catch
}
