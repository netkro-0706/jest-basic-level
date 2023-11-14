import { render } from "@testing-library/react";
import Timer from "./Timer";

//지속적으로 변경되는 데이터 테스트
//mock함수를 만들어서 대응
test("초 표시", () => {
  Date.now = jest.fn(() => 123456789);
  const { container } = render(<Timer />);
  expect(container).toMatchSnapshot();
});
