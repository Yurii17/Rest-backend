import {UserService, AdminService} from './services';
export * from './config';

const serviceProvider = {
    user: new UserService(),
    admin: new AdminService(),
}

export * from './config';
export {
    serviceProvider
}