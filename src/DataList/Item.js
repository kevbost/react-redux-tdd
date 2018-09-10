import React from 'react'

export const Item = props => {
	const { item: { name } } = props 

	return (
		<div>
			<span><i className="fa fa-pencil"></i></span>
			<span>{'item name:'}</span>
			<span className="item">{name}</span>
		</div>
	)
}

export default Item
