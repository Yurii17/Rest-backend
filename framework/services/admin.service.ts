import { BaseInterface, decorateService } from "../../lib";
import {urls} from '../config';

class AdminService extends BaseInterface {
    constructor(host = urls.adminService) {
        super(host);
    }

    async adminLogin(body: {username?: string, password?: string}) {
        return this.req.post({path: '/api/admin/auth/login', body})
    }
}

decorateService (AdminService);

export {
    AdminService
}