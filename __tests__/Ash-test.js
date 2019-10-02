/**
 * @format
 */

import 'react-native';
import React from 'react';
import Ash from '../ash/Ash';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Ash correctly', () => {
  renderer.create(<Ash />);
});
