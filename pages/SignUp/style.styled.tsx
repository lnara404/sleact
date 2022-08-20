import styled from '@emotion/styled';

export const Header = styled.header`
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: Slack-Larsseit, 'Helvetica Neue', Helvetica, 'Segoe UI', Tahoma, Arial, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 46px;
  text-align: center;
  letter-spacing: -0.75px;
`;

export const Form = styled.form`
  width: 400px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    display: block;
    padding-bottom: 8px;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.4667;
    text-align: left;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding: 11px 12px 13px;
  margin: 0 0 20px;
  font-size: 18px;
  line-height: 1.33;
  color: rgb(29 28 29);
  background-color: rgb(255 255 255);
  border: 1px solid rgb(29 28 29);
  border-radius: 4px;
  transition: border 0.08s ease-out, box-shadow 0.08s ease-out;

  &:focus {
    box-shadow: 0 0 0 1px rgb(18 100 163), 0 0 0 5px rgb(29 155 209 / 30%);
  }
`;

export const Button = styled.button`
  width: 100%;
  min-width: 96px;
  max-width: 100%;
  height: 44px;
  padding: 0 16px 3px;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  cursor: pointer;
  user-select: none;
  background-color: #4a154b;
  border: 0;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
  transition: all 0.08s linear;

  &:hover {
    background-color: rgb(74 21 75 / 90%);
    border: 0;
  }

  &:focus {
    box-shadow: 0 0 0 1px rgb(18 100 163), 0 0 0 5px rgb(29 155 209 / 30%);
  }
`;

export const Error = styled.div`
  margin: 8px 0 16px;
  font-weight: bold;
  color: #e01e5a;
`;

export const Success = styled.div`
  font-weight: bold;
  color: #2eb67d;
`;

export const LinkContainer = styled.p`
  width: 400px;
  max-width: 400px;
  margin: 0 auto 8px;
  font-size: 13px;
  color: #616061;

  & a {
    font-weight: 700;
    color: #1264a3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
