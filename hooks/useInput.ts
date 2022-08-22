import { Dispatch, SetStateAction, useCallback, useState } from "react";

// 매개변수에 타입을 붙여줘야한다. (변수, 리턴값은 ts가 대부분 추론하여 에러가 뜨지않는다.)
// 타입이 어떤게 들어올지 모를때 initialData: any, 제너릭으로 에러를 해결합니다.
// 리턴값의 타입은 매개변수 뒤쪽에 넣어준다.
// Dispatch, SetStateAction은 리액틑가 제공하는 타입입니다.

type ReturnTypes<T> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];
// any 대신 ChangeEvent<HTMLInputElement>
// e.target.value 대신 e.target.value as unknown as T

const useInput = <T = any>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue]
};
export default useInput;