import { render, screen } from '@testing-library/react';

/*
  Jest is a test runner, which gives you the ability to run tests with Jest 
  from the command line. In addition, Jest offers you functions for test suites, 
  test cases, and assertions. Of course the frameworks offers more than this 
  (e.g. spies, mocks, stubs, etc.); but essentially that's 
  everything needed for now to understand why we need Jest in the first place.
  (see https://www.robinwieruch.de/react-testing-library/)
*/

//  Defining a Test Suite   
// describe('my function or component', () => {  <-- describe-block
//    it('does the following', () => {           <-  it-block or test-case

//    });
//  });

 
  import * as React from 'react';
  import {render} from 'testing-library/react';
  import App from './App';
  
  //the "render" function takes any JSX as argument to render it as output
  describe ('App', () =>{
    it('renders App component', () => { 
      render(<App />);

      screen.debug(); //will let you see html output of App component
    });
  })