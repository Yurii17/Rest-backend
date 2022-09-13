// import * as fetchy from 'node-fetch';
const fetchy = require('node-fetch');
import * as QS from 'querystring';
import * as URL from 'url';
import {logger} from '../report';


interface IRequstParams {
    path    : string;
    body?   : any;
    headers?: object;
    queries?: object;
}

interface IResponse {
    body   : any;
    status : number;
    headers: object;
}

interface IRequest {
    get   (arg: IRequstParams): Promise<IResponse>;
    post  (arg: IRequstParams): Promise<IResponse>;
    put   (arg: IRequstParams): Promise<IResponse>;
    patch (arg: IRequstParams) : Promise<IResponse>;
    del   (arg: IRequstParams): Promise<IResponse>;
}

const methods = {
    post : 'POST',
    del  : 'DELETE',
    get  : 'GET',
    put  : 'PUT',
    patch: 'PATCH'
}

function createReqBody(body: any, method: string) {
    if (method === methods.get) {
        return;
    }
    if (typeof body === 'object') {
        return JSON.stringify(body);
    } else if (typeof body === 'string') {
        return body;
    }
}

async function _fetch(host: string, method: string, {path, body, headers, qeuries}) {
    qeuries = qeuries ? `?${QS.stringify(qeuries)}` : '';
    body    = createReqBody(body, method);
    headers = headers || {'Content-Type': 'application/json'};

    const requestUrl = `${URL.resolve(host, path)}${qeuries}`;
    logger(`\t${method} Request to ${requestUrl}`, body, headers, qeuries);
    const response   = await fetchy(requestUrl, {method, headers, body});

    const responseHeaders = Array
        .from(response.headers.entries())
        .reduce((acc, [key, value]) => {acc[key] = value.toLowerCase(); return acc}, {})

    const responseBodyMethod = responseHeaders['content-type'].includes('application/json') ? 'json' : 'text';

    const responseData = {
        body   : await response[responseBodyMethod](),
        status : response.status,
        headers: responseHeaders
    };

    logger(`\tResponse data`, responseData.body, responseData.status);

    return responseData;
}

function buildRequest(host: string): IRequest {
    return {
        get  : _fetch.bind(_fetch, host, methods.get),
        post : _fetch.bind(_fetch, host, methods.post),
        put  : _fetch.bind(_fetch, host, methods.put),
        patch: _fetch.bind(_fetch, host, methods.patch),
        del  : _fetch.bind(_fetch, host, methods.del)
    }
}

export {
    buildRequest,
    IRequest
} 