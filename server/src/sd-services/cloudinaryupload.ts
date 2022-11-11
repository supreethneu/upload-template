let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
import * as cloudinary from 'cloudinary'; //_splitter_
//append_imports_end
export class cloudinaryupload {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'cloudinaryupload';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new cloudinaryupload(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_cloudinaryupload_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: cloudinaryupload');

    //appendnew_flow_cloudinaryupload_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: cloudinaryupload');

    this.app['post'](
      `${this.serviceBasePath}/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'temp'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_IL6FnKkEdFS7XhAs(bh);
          //appendnew_next_sd_vsHotY2TudFu39vH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vsHotY2TudFu39vH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_cloudinaryupload_HttpIn
  }
  //   service flows_cloudinaryupload

  //appendnew_flow_cloudinaryupload_start

  async sd_IL6FnKkEdFS7XhAs(bh) {
    try {
      bh.input.data = bh.input.files.file[0].path;
      bh = await this.sd_4aknWP4ZM10RV2Mt(bh);
      //appendnew_next_sd_IL6FnKkEdFS7XhAs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IL6FnKkEdFS7XhAs');
    }
  }

  async sd_4aknWP4ZM10RV2Mt(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        '983957c2-2197-2304-3ba8-02c9a111cd9d',
        'sd_L0ZKs4x4N9VFUMNW'
      );

      cloudinary.v2.config({
        cloud_name: configObj.cloud_name,
        api_key: configObj.api_key,
        api_secret: configObj.api_secret,
      });

      bh.result = await cloudinary.v2.uploader.upload(bh.input.data, {
        folder: 'test',
      });

      bh = await this.sd_DxPnfA80PhDGj6uc(bh);
      //appendnew_next_sd_4aknWP4ZM10RV2Mt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4aknWP4ZM10RV2Mt');
    }
  }

  async sd_DxPnfA80PhDGj6uc(bh) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DxPnfA80PhDGj6uc');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_cloudinaryupload_Catch
}
