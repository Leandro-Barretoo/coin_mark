import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import App from '../App';

describe('The App element', () => {
  test('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
