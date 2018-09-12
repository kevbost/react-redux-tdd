import React from 'react'
import { ItemsList, mapStateToProps, mapDispatchToProps } from './ItemsList'
import ConnectedItemsList from './ItemsList'
import { mockItems } from './fixtures'
import * as selectors from './selectors'
import * as actions from './actions'

describe( 'ItemsList component', () => {
  let props 
  let wrapper 

  beforeEach( () => {
    props = {
      fetchData: jest.fn(),
      items: mockItems
    }
    wrapper = global.shallow( <ItemsList {...props} /> )
  })

  it( 'it should render', () => {
    expect( wrapper ).toHaveLength( 1 )
  })

  it( 'it should render Item component for each item', () => {
    expect( wrapper.find( 'Item' ) ).toHaveLength( mockItems.length )
  })

  it( 'it should call fetchData on mount', () => {
    wrapper.instance().componentDidMount()
    expect( props.fetchData ).toHaveBeenCalled()
  })

  it( 'should map mapStateToProps', () => {
    const state = {}
    // items - selectItems
    jest.spyOn( selectors, 'selectItems' )
    const mappedProps = mapStateToProps( state )
    expect( mappedProps ).toHaveProperty( 'items' )
    expect( selectors.selectItems ).toHaveBeenCalledWith( state )
  })

  it( 'should map mapDispatchToProps', () => {
    // fetchData 
    const dispatch = jest.fn()
    jest.spyOn( actions, 'fetchData' )
    const mappedProps = mapDispatchToProps( dispatch ) 
    expect( mappedProps ).toHaveProperty( 'fetchData' )
    mappedProps.fetchData()
    expect( actions.fetchData ).toHaveBeenCalled()
  })

  it( 'should return connected', () => {
    expect( ConnectedItemsList ).toBeTruthy()
  })

})
