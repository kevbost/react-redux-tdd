import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { selectItems } from './selectors'
import { fetchData } from './actions'

export class ItemsList extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }
  render() {
    return (
      <React.Fragment>
        {this.props.items.map( item => {
          return <Item key={item.id} item={item} />
        })}
      </React.Fragment>
    )
  }
}

export const mapStateToProps = state => {
  return {
    items: selectItems( state )
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch( fetchData() )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( ItemsList )
