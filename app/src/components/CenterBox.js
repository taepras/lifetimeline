import styled from "styled-components";

const StyledCenterBox = styled.div`
  width: auto;
  ${({ fillHeight }) => fillHeight && `height: 100%;`}

  display: flex;
  justify-content: center;
  align-items: center;
`;

function CenterBox({ className, children, fillHeight }) {
  return (
    <StyledCenterBox className={className} fillHeight={fillHeight}>
      <div>{children}</div>
    </StyledCenterBox>
  );
}

export default CenterBox;
