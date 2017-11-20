import React, { Component } from 'react';
import styled from 'styled-components';
import EntryPage from '../components/EntryPage';

const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(to right, #e1eec3, #f05053);
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <Wrapper>
        <EntryPage data={this.state.data} />
      </Wrapper>
    );
  }
}

export default App;
