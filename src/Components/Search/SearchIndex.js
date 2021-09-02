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
    this.setState({
      filtered: this.state.things
    });
    console.log(this.state.things);
  }

  componentDidUpdate() {
    if(this.state.filtered !== this.state.things) {
    this.setState({
      filtered: this.state.things
    });
    }
  }

  handleChange(e) {
    let results = [];
    let newResults = [];
    if (e.target.value !== '') {
      results = this.state.things;
      newResults = results.filter(terms => {
        const lower = terms.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lower.includes(filter);
      });
    } else {
      newResults = this.state.things;
    }
    this.setState({
      filtered: newResults
    });
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return(
      <div>
        <form>
            <Input 
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="search"
             />
        </form>
        <h3>Results:</h3>
          {this.state.filtered.map((items) => (
            <li key={items}>{items}</li>
          ))}
      </div>
  )}
}

export default SearchIndex;
