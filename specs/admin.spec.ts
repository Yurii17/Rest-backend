import {expect} from 'chai'
import {serviceProvider} from '../framework'

describe('Admin', function () {
    const auth = {
        username: 'sometest@email.com',
        password: 'Password1'
    }

    it('auth login', async() => {
        const {body, status} = await serviceProvider.admin.adminLogin(auth)
        expect(status).to.equal(200);
        expect(body).to.include.keys('admin', '')
    })
})