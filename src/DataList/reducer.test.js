import reducer from './reducer'
import { mockItems } from './fixtures'
import { setItems } from './actions'

describe('reducer', () => {
	let received

	it('should return default state on init/no action found', () => {
		received = reducer(undefined, { type: '@@INIT'})
		expect(received).toEqual([])
		received = reducer(undefined, { type: 'FOOBAR'})
		expect(received).toEqual([])
	})
	
	it('should handle setItems', () => {
		received = reducer([], setItems( mockItems))
		expect(received).toEqual(mockItems)
	})
})
