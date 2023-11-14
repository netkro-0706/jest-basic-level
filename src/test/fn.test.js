import fn from "./fn";

xtest("fn.test skip", () => {
  //test skip
});

//==========================================
////mock

// //mock함수 호출확인과 검사
// const mockFn = jest.fn();

// mockFn(10, 20);
// mockFn();
// mockFn(30, 40);

// test("한번 이상 호출?", () => {
//   expect(mockFn).toHaveBeenCalled();
// });
// test("정확히 세번 호출?", () => {
//   expect(mockFn).toHaveBeenCalledTimes(3);
// });
// test("10이랑 20 전달받은 함수가 있는가?", () => {
//   expect(mockFn).toHaveBeenCalledWith(10, 20);
// });
// test("30이랑 40 전달받은 함수가 있는가?", () => {
//   expect(mockFn).toHaveBeenCalledWith(30, 40);
// });
// test("마지막 함수는 30이랑 40을 받았는가?", () => {
//   expect(mockFn).toHaveBeenLastCalledWith(30, 40);
// });

//mock으로 유저생성
// //이 코드로 실제 유저를 생성하지 않고 mock생성으로 처리한다.
// jest.mock("./fn");
// fn.createUser.mockReturnValue({ name: "Mike" });

// test("유저 생성", () => {
//   const user = fn.createUser("Mike");
//   expect(user.name).toStrictEqual("Mike");
// });

//비동기 확인
// const mockFn = jest.fn();
// mockFn.mockResolvedValue({ name: "Mike" });

// test("받아온 이름은 Mike", () => {
//   mockFn().then((res) => {
//     console.log(res);
//     expect(res.name).toBe("Mike");
//   });
// });

//조건 확인(홀짝)
// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValue(true);

// const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

// test("홀수는 1, 3, 5", () => {
//   console.log(result);
//   expect(result).toStrictEqual([1, 3, 5]);
// });

//실행마다 다른값 return
// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(10)
//   .mockReturnValueOnce(20)
//   .mockReturnValueOnce(30)
//   .mockReturnValue(40)
//   .mockReturnValueOnce(50);

// mockFn();
// mockFn();
// mockFn();
// mockFn();
// mockFn();

// test("dd", () => {
//   expect("dd").toBe("dd");
// });

//함수 테스트
// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("10에서 1증가시켜 반환", () => {
// });
// test("20에서 1증가시켜 반환", () => {
// });
// test("30에서 1증가시켜 반환", () => {
// });

//값 변화 테스트
// const mockFn = jest.fn();

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1);
//   });
// }
// forEachAdd1([10, 20, 30]);

// test("함수 호출은 3번 된다.", () => {
// });
// test("전달된 값은 11, 21, 31입니다.", () => {
// });

//mock기본
// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("함수는 2번 호출된다.", () => {
// });
// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1이다.", () => {
// });

//==========================================

// // 테스트 전후작업
// let user;

// beforeAll(async () => {
//   user = await fn.connectUserDb();
// });
// afterAll(() => {
//   return fn.disconnectDb();
// });

// test("이름은 Mike", () => {
//   expect(user.name).toBe("Mike");
// });

// test("나이는 30?", () => {
//   expect(user.age).toBe(30);
// });

// describe("Car 관련 직업", () => {
//   let car;

//   beforeAll(async () => {
//     car = await fn.connectCarDb();
//   });
//   afterAll(() => {
//     return fn.disconnectCarDb();
//   });

//   test("이름은 z4", () => {
//     expect(car.name).toBe("z4");
//   });

//   //이것은 건너뜀
//   test.skip("브랜드는 bmw?", () => {
//     expect(car.brand).toBe("bmw");
//   });
//   //   //이것만 실행
//   //   test.only("색깔은 red?", () => {
//   //     expect(car.color).toBe("red");
//   //   });
// });

//-------------------

// let num = 10;

// //테스트전 초기화
// beforeEach(() => {
//   num = 0;
// });

// // //1번째 테스트 후 초기화
// // afterEach(() => {
// //   num = 0;
// // });

// test("0더하기 1은 1이야", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0더하기 2은 2이야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// test("0더하기 3은 3이야", () => {
//   num = fn.add(num, 3);
//   expect(num).toBe(3);
// });

// test("0더하기 4은 4이야", () => {
//   num = fn.add(num, 4);
//   expect(num).toBe(4);
// });

//==========================================

//비동기 테스트
/**
 * async await
 */
// test("3초 후에 나이는 30", async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(30);
// });
// test("resolve: 3초 후에 나이는 30", async () => {
//   await expect(fn.getAge()).resolves.toBe(30);
// });
// test("rejects: 3초 후에 에러", async () => {
//   await expect(fn.getAge()).rejects.toMatch("error");
// });

/**
 * promise는 return을 해줘야한다.
 * done은 필요없다.
 */
// test("resolves: 3초 후에 받아온 나이는 30", () => {
//   return expect(fn.getAge()).resolves.toBe(30);
// });
// test("rejects: 3초 후에 에러가 난다.", () => {
//   return expect(fn.getAge()).rejects.toMatch("error");
// });
// test("promise: 3초 후에 받아온 나이는 30", () => {
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });

/**
 * callback함수
 * 비동기시엔 done을 넣을것
 * */
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   fn.getName(callback);
// });

//==========================================

// test("에러 발생하나", () => {
//   expect(() => fn.throwErr()).toThrow("xx");
// });

// test("유저 리스트에 Mike가 있나", () => {
//   const user = "Mike";
//   const userList = ["Tom", "Jane", "Kai", "Mike"];
//   expect(userList).toContain(user);
// });

// test("Hello World에 h가 있는가", () => {
//   expect("Hello World").toMatch(/h/i);
// });

// test("0.1 더하기 0.2는 0.3", () => {
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

// test("ID는 10자 이하여야 한다.", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });

// test("비밀번호 4자리", () => {
//   const pw = "1234";
//   expect(pw.length).toBe(4);
// });

// test("null은 null", () => {
//   expect(null).toBeNull();
// });

// test("비어있지 않은 문자열은 true", () => {
//   expect(fn.add("hello", "world")).toBeTruthy();
// });

// test("0은 false", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// test("이름과 나이를 전달받아서 객체를 반환", () => {
//     expect(fn.makeUser("Mike", 30)).toEqual({
//       name: "Mike",
//       age: 30,
//     });
//   });

// test("이름과 나이를 전달받아서 객체를 반환", () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("1은 1이야.", () => {
//   expect(1).toBe(1);
// });

// test("2더하기 3은 5야.", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3더하기 3은 5가 아니야", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });
