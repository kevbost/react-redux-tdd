import React from 'react'
import { CompWithAsync } from './CompWithAsync'

describe( 'Component with Async', () => {
  let props 
  let wrapper 
  beforeEach( () => {
    props = {
      asyncAction: jest.fn( () => {
        return new Promise( ( resolve ) => {
          resolve( 'good' )
        })
      })
    }
    wrapper = global.shallow( <CompWithAsync {...props} /> )
  })

  it( 'should render', () => {
    expect( wrapper ).toHaveLength( 1 )
  })

  it( 'should set state to loading on mount', () => {
    wrapper.instance().componentDidMount()
    expect( wrapper.state( 'loading' ) ).toBe( true )
  })

  it( 'should do async fetch and set results to state', ( done ) => {
    wrapper.instance().componentDidMount()
      .then( () => {
        expect( wrapper.state( 'result' ) ).toEqual( 'good' )
        done()
      })
      .catch( ( err ) => {
        done.fail( err )
      })
  })

  it( 'should do async fetch set result to bad if testPromise fails', ( done ) => {
    wrapper.setProps({
      asyncAction: jest.fn( () => {
        return new Promise( ( resolve, reject ) => {
          reject( 'bad' )
        })
      })
    })
    wrapper.instance().componentDidMount()
      .then( () => {
        expect( wrapper.state( 'result' ) ).toBe( 'bad' )
        done()
      })
      .catch( ( err ) => {
        done.fail( err )
      })

  })


})
