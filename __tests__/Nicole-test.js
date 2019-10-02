/**
 * @format
 */

import 'react-native';
import React from 'react';
import Nicole from '../Nicole/Nicole';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Nicole correctly', () => {
  renderer.create(<Nicole />);
});
