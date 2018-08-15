import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  // To turn off any request from axios
  moxios.install();
  // When there's a request, automaticly give fake response!
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched #1'}, {name: 'Fetch #2'}]
  });
});

afterEach(() => {
  // To prevent moxios to be use in other testing locations.
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) =>{
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Expect to find a list of comments! ( SetTimeout is used to "Pause" before
  // axios can execute the expect)
/*
  setTimeout(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  }, 100);
*/

  // Use of moxios.wait instead of SetTimeout:
  moxios.wait(() => {
    // Forced update the components inside wrapped
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    // Just only when 'done' is called the func woundn't complete.
    done();

    // Clean up when creating an element with mount function.
    wrapped.unmount();
  });
});
