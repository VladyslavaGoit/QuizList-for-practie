import styled from 'styled-components';

const getBorderColor = ({ level, theme: { colors } }) => {
  switch (level) {
    case 'beginner':
      return colors.blue;
    case 'intermediate':
      return colors.yellow;
    case 'advanced':
      return colors.red;
    default:
      return 'transparent';
  }
};

export const Wrapper = styled.div`
  padding: ${p => p.theme.spacing(2)};
  height: 215px;
  border: ${p => p.theme.radii.sm} solid ${getBorderColor};
`;

export const Button = styled.button`
  padding: ${p => p.theme.spacing(1)};
  width: 45px;
  height: 45px;
  border: none;
  background-color: transparent;
  color: #ff4d00;
  :hover {
    background-color: #f7976e;
    color: white;
  }
`;
