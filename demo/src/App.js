import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
//IMPORTANT: below file should be linked with npm link
import ReactQuill from "react-quill";

import 'react-quill/dist/quill.snow.css'; 

const background = "gray",
      borders = "red";

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }]
  ]
};

const ComposerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${background.secondary};
  border-top: 1px solid ${borders};
`;

const QuillWrapper = styled.div`
  display: flex;
`;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {value: ""}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue){
      this.setState({value: newValue})
  }
  
  render() {
    return (
      <div className="App">
            <ComposerWrapper>
                <QuillWrapper>
                        <ReactQuill
                          value={this.state.value}
                          onChange={this.handleChange}
                          modules={modules}
                          placeholder="Add an internal comment"
                        >
                          <input/>
                        </ReactQuill> 
                </QuillWrapper>     
            </ComposerWrapper>
      </div>
    );
  }
}

export default App;
