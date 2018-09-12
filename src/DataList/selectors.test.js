import { mockItems } from './fixtures'
import { selectItems } from './selectors'

describe( 'selectors', () => {
  it( 'should get items', () => {
    const state = {
      items: mockItems
    }
    const received = selectItems( state )
    expect( received ).toEqual( mockItems )
  })
})
