// @flow
import fuseapi from '../fuseapi'

xdescribe('fuseAPI', () => {
  test('get list of wallet transaction', async () => {
    const { result } = await fuseapi.getTxList({
      address: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
      page: 1,
      offset: 10,
      filterby: 'from'
    })
    expect(Array.isArray(result)).toBeTruthy()
  })
})
