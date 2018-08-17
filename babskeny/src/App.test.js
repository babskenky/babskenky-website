import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('to match snapShot',()=>{
  it('should match snapShot',()=>{
    const elem = shallow(
        <div>
            <Nav/>
            <Views/>
            <Footer/>
        </div>
    );
      expect(elem).toMatchSnapshot()
  })
})