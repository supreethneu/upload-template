/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { uploadimg } from 'app/sd-services/uploadimg'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-testupload',
  templateUrl: './testupload.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class testuploadComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_XuskVRhG4jOhcrXC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_XuskVRhG4jOhcrXC(bh) {
    try {
      bh = this.sd_fHvOIp96YcHA7sc1(bh);
      //appendnew_next_sd_XuskVRhG4jOhcrXC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XuskVRhG4jOhcrXC');
    }
  }

  fileupl(event: any = undefined, fileNameInput: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event, fileNameInput: fileNameInput };
      bh.local = {};
      bh = this.sd_8ybKMEDlF0wrSvsq(bh);
      //appendnew_next_fileupl
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vgoZ4tIsHR2btHb9');
    }
  }

  //appendnew_flow_testuploadComponent_start

  sd_fHvOIp96YcHA7sc1(bh) {
    try {
      this.page.loader = 0;
      this.page.file = undefined;
      bh = this.sd_OexN1cfp1JjiNu8O(bh);
      //appendnew_next_sd_fHvOIp96YcHA7sc1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fHvOIp96YcHA7sc1');
    }
  }

  sd_OexN1cfp1JjiNu8O(bh) {
    try {
      this.page.formControl = FormControl;
      this.page.formGroup = FormGroup;
      bh = this.sd_Y2J2C3Gy83VopjpJ(bh);
      //appendnew_next_sd_OexN1cfp1JjiNu8O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OexN1cfp1JjiNu8O');
    }
  }

  sd_Y2J2C3Gy83VopjpJ(bh) {
    try {
      const page = this.page;
      page.Form = new page.formGroup({
        file: new page.formControl(''),
      });
      //appendnew_next_sd_Y2J2C3Gy83VopjpJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y2J2C3Gy83VopjpJ');
    }
  }

  sd_8ybKMEDlF0wrSvsq(bh) {
    try {
      const page = this.page;
      page[bh.input.fileNameInput] = bh.input.event.target.files[0].name;

      page.loader = 1;
      page.file = bh.input.event.target.files[0];
      bh = this.sd_xJRDHkq92zegLZbH(bh);
      //appendnew_next_sd_8ybKMEDlF0wrSvsq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ybKMEDlF0wrSvsq');
    }
  }

  async sd_xJRDHkq92zegLZbH(bh) {
    try {
      const uploadimgInstance: uploadimg =
        this.__page_injector__.get(uploadimg);

      let outputVariables = await uploadimgInstance.sd_tSrRS7Awj4V5e6vw(
        this.page.file
      );

      bh = this.sd_qTFdz3zNENac9jt2(bh);
      //appendnew_next_sd_xJRDHkq92zegLZbH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xJRDHkq92zegLZbH');
    }
  }

  sd_qTFdz3zNENac9jt2(bh) {
    try {
      const page = this.page;
      page.loader = 2;
      //appendnew_next_sd_qTFdz3zNENac9jt2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qTFdz3zNENac9jt2');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_testuploadComponent_Catch
}
