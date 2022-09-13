import { BaseInterface, decorateService } from "../../lib";
import {urls} from '../config';

class UserService extends BaseInterface {
    constructor(host = urls.userService) {
        super(host);
    }

    async getUserData() {
        return this.req.get({path: '/api/user'})
    }

    async userLogin(body: {username?: string, password?: string}) {
        return this.req.post({path: '/api/auth/login', body})
    }
}

decorateService (UserService);

export {
    UserService
}