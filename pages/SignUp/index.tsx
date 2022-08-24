import useInput from '@hooks/useInput';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Header,Form, Label, Input, Error, Button, Success, LinkContainer } from './style.styled';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  // useCallback으로 감싸지 않아도 동작을 안하는건 아니지만 SignUp 재실행되면서 매번 함수들이 재생성되는걸 막기위해서 감싸준다. (리렌더링이 많이 일어남, 디버깅하기가 어려움)

  const onChangePassword = useCallback((e) => {
    // 요청보내기 전 state 초기화 시켜주기
    // 1단계 - 로딩 단계
    setPassword(e.target.value);
    setMismatchError(e.target.value !== passwordCheck);
  }, [passwordCheck]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setMismatchError(e.target.value !== password);
  }, [password]);

  const onSubmit = useCallback((e) => {
      e.preventDefault();
      if (!mismatchError && nickname) {
        console.log('서버로 회원가입하기');
        setSignUpError('');
        setSignUpSuccess(false);
        axios.post('http://localhost:3095/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            // 2단계 - 성공 단계
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            // 3단계 - 실패 단계
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
          // useCallback 안에 함수를 [email, nickname, password, passwordCheck] 값들이 하나라도 바뀔 때 까지 캐싱한다.
          // [email, nickname, password, passwordCheck] 값들이 하나라도 바뀌면 안에 함수를 새로만들고 그렇지않으면 이전 함수를 계속 쓴다.
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>

          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
