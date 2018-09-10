import React from 'react'
import { Item } from './Item'

describe('Item component', () => {
	let props 
	let wrapper 
	beforeEach(() => {
		props = {}
		wrapper = global.shallow(<Item {...props} />)
	})

	it('should render', () => {
		expect(wrapper).toHaveLength(1)
	})
})
