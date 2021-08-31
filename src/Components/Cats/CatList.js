import React, { Component } from 'react';
import CatIndex from './CatIndex';
 
class CatList extends Component {

  render() { 
 return (
   <div>
     {this.props.cats.map((cats) => <li>{cats}</li> )}
   </div>
  )
}
}
export default CatList;