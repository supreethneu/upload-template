//append_imports_start

import * as sd_XMfNpmNpiBKlGqlG from 'app/sd-services/uploadimg'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(private sd_XMfNpmNpiBKlGqlG: sd_XMfNpmNpiBKlGqlG.uploadimg) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
