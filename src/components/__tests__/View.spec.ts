import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import ViewVue from "@/ViewVue.vue";

describe("View", () => {
  const viewText = "Hello from inside View";
  it.concurrent("renders span correctly", async () => {
    //arrange
    const viewId = "viewId";
    render(ViewVue, {
      props: {
        element: "span",
        id: "viewId",
      },
      slots: { default: viewText },
    });

    const view = await screen.findByText(viewText);

    expect(view.id).toBe(viewId);
    expect(view.innerHTML).toBe(viewText);
    expect(view.nodeName).toBe("SPAN");
  });

  it("snapshot matches", () => {
    const wrapper = render(ViewVue, {
      props: {
        element: "div",
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
