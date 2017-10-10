import React, { Component } from 'react';
import styled from 'styled-components';
import EntryPage from '../components/EntryPage';

const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(to right, #e1eec3, #f05053);
`;

class App extends Component {
    render() {
		return (
  			<Wrapper>
      			<EntryPage />
      		</Wrapper>
    	);
  	}
}

export default App;
