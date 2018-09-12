import React from 'react'

export const testPromise = () => {
  return new Promise( ( resolve, reject ) => {
    resolve( 'good' )
  })
}

export class CompWithAsync extends React.Component {
  constructor( props ) {
    super( props ) 
    this.state = {
      loading: false
    }
  }
  async componentDidMount() {
    this.setState({
      loading: true
    })
    try {
      const result = await this.props.asyncAction()
      this.setState({
        loading: false,
        result
      })
    } catch ( err ) {
      this.setState({
        loading: false,
        result: err
      })
    }
  }

  render() {
    return null
  }
}
