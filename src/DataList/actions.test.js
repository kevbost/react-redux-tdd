import { fetchData } from './actions'
import mockStore from 'redux-mock-store'
import { mockItems } from './fixtures'

describe( 'actions', () => {
  let store 
  beforeEach( () => {
    store = mockStore({})
  })

  it( 'should call setItems on successful fetchData', ( done ) => {
    store.dispatch( fetchData() )
      .then( () => {
        expect( store.getActions() ).toEqual( [
          {
            type: 'SET_ITEMS',
            items: mockItems
          }
        ] )
        done() // important
      })
      .catch( ( err ) => {
        console.log( err )
        done.fail( 'this should not be calling' )
      })
  })

})
