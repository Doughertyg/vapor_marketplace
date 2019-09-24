import Enzyme, { shallow, render, mount } from "enzyme";
import React from "react";
import Main_top from "../client/src/components/top_nav/Main_top.jsx";

describe("App component", () => {
  it("should have a function", () => {
    const wrapper = shallow(<Main_top />);
    const text = wrapper.find("h1").text();
    expect(text).toEqual("");
  });
});
