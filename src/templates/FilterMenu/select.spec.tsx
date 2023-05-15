import { fireEvent, logRoles, render } from "@testing-library/react";
import Select from "./Select";

describe('<Select />', () => {
  it("check options elements in menu rendering correctly", () => {
    const view = render(<Select type_names={['fire', 'water', 'grass']} />);
    const button = view.getByText('All');
    fireEvent.click(button);

    logRoles(view.container)
  })
});

