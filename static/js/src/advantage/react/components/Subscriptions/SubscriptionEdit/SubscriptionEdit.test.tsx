import React from "react";
import { shallow } from "enzyme";

import SubscriptionEdit from "./SubscriptionEdit";

describe("SubscriptionEdit", () => {
  it("initially hides the cancel modal", () => {
    const wrapper = shallow(<SubscriptionEdit />);
    expect(wrapper.find("SubscriptionCancel").exists()).toBe(false);
  });

  it("initially hides the cancel modal", async () => {
    const wrapper = shallow(<SubscriptionEdit />);
    // The portal currently requires a fake event, this should be able to be
    // removed when this issue is resolved:
    // https://github.com/alex-cory/react-useportal/issues/36
    const fakeEvent = { currentTarget: true };
    wrapper.find("[data-test='cancel-button']").simulate("click", fakeEvent);
    expect(wrapper.find("SubscriptionCancel").exists()).toBe(true);
  });
});