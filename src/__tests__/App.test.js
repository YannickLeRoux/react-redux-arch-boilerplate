import Todo from '../components/todo';
import React from 'react'
import { shallow } from 'enzyme';

describe('Todo component should render without any issue', () => {
	let todo,onChange;
	beforeEach(()=>{
		onChange = jest.fn((e)=>(e));
	  	todo = shallow(<Todo id={123} title={'Test Title'} onCheck={onChange} 
          checked={false}/>);
	});
	it('The Todo Component should match the snapshot',()=>{
		expect(todo).toMatchSnapshot();
	});
	it('OnChange handler is called',() => {
		todo.find('input[type="checkbox"]').simulate('change',{ target: { checked: true } });
		expect(onChange).toHaveBeenCalled();
	})
});