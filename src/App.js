import React, { Component } from 'react';
import './App.css';
import marked from 'marked'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markdown: ''
    }
  }

  handleChange(event) {
    this.setState( {markdown: event.target.value} )
  }

  render() {
    return (
      <div className="App">
          <div id="markdown">
            <h2>Markdown</h2>
            <textarea onChange={(event) => this.handleChange(event)} value={this.state.markdown} rows="10"></textarea>
          </div>

          <div id="preview">
            <h2>Preview</h2>
            <div className="preview" dangerouslySetInnerHTML={ {__html: marked(this.state.markdown)} }></div>
          </div>

      </div>
    );
  }
}

export default App;
