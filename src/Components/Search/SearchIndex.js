import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends React.Component {
  constructor() {
    super()
    this.state = {
    things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
    filtered: []
  }
  }

  componentDidMount() {
    this.handleChange()
  }

  handleChange() {
    let happy = document.getElementById('searchterms').value.toLowerCase();
    console.log(happy);
    if (happy === '') {
      this.setState({
        filtered: this.state.things
      })
    } else {
      let results = this.state.things.filter(terms => {
        if (terms.toLowerCase().includes(happy)) {
          return terms;
        } 
        });
  
      this.setState({
        filtered: results
      });
    }
    
    
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return(
      <div>
        <form>
            <Input 
            type="text"
            className="input"
            id="searchterms"
            onChange={this.handleChange}
            placeholder="search"
            />
        </form>
        <h3>Results:</h3>
          {this.state.filtered.map(items => (
            <li key={items}>{items}</li>
          ))}
      </div>
  )}
}

export default SearchIndex;
