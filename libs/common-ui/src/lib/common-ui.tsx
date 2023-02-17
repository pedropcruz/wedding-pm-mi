import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonUiProps {}

const StyledCommonUi = styled.div`
  color: pink;
`;

export function CommonUi(props: CommonUiProps) {
  return (
    <StyledCommonUi>
      <h1>Welcome to CommonUi!</h1>
    </StyledCommonUi>
  );
}

export default CommonUi;
