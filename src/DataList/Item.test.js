import React from 'react'
import { Item } from './Item'
import { mockItems } from './fixtures'

describe( 'Item component', () => {
  let props 
  let wrapper 
  beforeEach( () => {
    props = {
      item: mockItems[0]
    }
    wrapper = global.shallow( <Item {...props} /> )
  })

  it( 'should render', () => {
    expect( wrapper ).toHaveLength( 1 )
  })

  it( 'should render name', () => {
    expect( wrapper.contains( props.item.name ) ).toBe( true )
  })
})
