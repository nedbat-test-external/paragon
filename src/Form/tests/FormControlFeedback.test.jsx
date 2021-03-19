import React from 'react';
import { mount } from 'enzyme';

import FormControlFeedback, { FEEDBACK_TYPES, FEEDBACK_ICONS } from '../FormControlFeedback';
import { FormGroupContext } from '../FormGroupContext';

describe('FormControlFeedback', () => {
  it('renders a form control with an id', () => {
    const getNewDescriptorId = jest.fn(() => 'descriptor-id');
    const wrapper = mount((
      <FormGroupContext.Provider value={{ getNewDescriptorId }}>
        <FormControlFeedback>
          This is feedback
        </FormControlFeedback>
      </FormGroupContext.Provider>
    ));
    expect(wrapper.exists('[children="This is feedback"]')).toBe(true);
    const FeedbackNode = wrapper.find(FormControlFeedback).first().childAt(0);
    expect(getNewDescriptorId).toHaveBeenCalled();
    expect(FeedbackNode.props().id).toContain('descriptor-id');
  });

  it('renders with a default icon for a variant', () => {
    const wrapper = mount((
      <FormControlFeedback type={FEEDBACK_TYPES.VALID}>
        This is feedback
      </FormControlFeedback>
    ));
    expect(wrapper.exists(FEEDBACK_ICONS[FEEDBACK_TYPES.VALID])).toBe(true);
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    const wrapper = mount((
      <FormControlFeedback icon={customIcon}>
        This is feedback
      </FormControlFeedback>
    ));
    expect(wrapper.exists('custom-icon')).toBe(true);
  });
});
