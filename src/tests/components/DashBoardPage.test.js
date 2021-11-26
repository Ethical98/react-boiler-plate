import DashboardPage from '../../components/DashboardPage';
import { shallow } from 'enzyme';
import React from 'react';

test('should render dashboardpage correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
