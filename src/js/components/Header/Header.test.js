import React from 'React'
import {shallow} from 'enzyme'
import Header from './Header'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})
