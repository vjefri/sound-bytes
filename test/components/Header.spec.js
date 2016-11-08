import React from 'react';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';

import Header from '../../src/screens/shared/Header';

describe('<Header />', () => {
  it('has class sound-head', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.sound-head')).to.have.length(1);
  });
});
