import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Homepage from '../components/Homepage';
import store from '../redux/configureStore';

describe('The Homepage element', () => {
  test('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Homepage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
