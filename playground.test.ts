import {buildRequest} from './lib/request'

test()

async function test() {
    const req = buildRequest('https://testapi.dev.com')
    const {body, status} = await req.get({path: '/api/user'})
    console.log(body, status)
}