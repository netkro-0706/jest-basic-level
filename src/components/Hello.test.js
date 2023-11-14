import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

//스냅샷 및 props 테스트
const user = {
  name: "Tom",
  age: 30,
};

const user2 = {
  age: 20,
};

xtest("snapshot test", () => {
  //test skip

  test("snapshot : name 있음", () => {
    const { container } = render(<Hello user={user} />);
    expect(container).toMatchSnapshot();
  });
  test("snapshot : name 없음", () => {
    const { container } = render(<Hello />);
    expect(container).toMatchSnapshot();
  });

  test("Hello글자가 포함 되는가?", () => {
    render(<Hello user={user} />);
    const helloEl = screen.getByText(/Hello/i);
    expect(helloEl).toBeInTheDocument();
  });
});
