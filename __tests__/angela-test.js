/**
 * @format
 */

import 'react-native';
import React from 'react';
import Angela from '../Angela/angela';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders angela correctly', () => {
  renderer.create(<Angela />);
});
