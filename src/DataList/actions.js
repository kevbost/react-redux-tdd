import { mockItems } from './fixtures'

export const setItems = ( items ) => {
	return {
		type: 'SET_ITEMS',
		items
	}
}

export const fetchData = () => {
	return ( dispatch ) => {
		return new Promise( resolve => {
			setTimeout( resolve, 1500 )
		})
			.then( () => {
				dispatch( setItems( mockItems ) )
			})
	}
}
