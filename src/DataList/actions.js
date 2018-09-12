import { mockItems } from './fixtures'

export const setItems = ( items ) => {
  return {
    type: 'SET_ITEMS',
    items
  }
}

export const fetchData = () => {
  return ( dispatch, getState ) => {
    return new Promise( ( resolve, reject ) => {
      setTimeout( resolve, 1000 )
    })
      .then( () => {
        dispatch( setItems( mockItems ) )
      })
  }
}
