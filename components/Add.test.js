import Add from './Add';
import Form from './Form';
import {mount} from 'enzyme'
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new Adapter()})
let wrapper;
beforeEach(() => {
    wrapper = mount(<Add />);
});
describe('<Add/> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
it('should render one <Form>', () => {
        expect(wrapper.find('Form')).toHaveLength(1);
    });
it('should render 2 <label>s', () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });
});