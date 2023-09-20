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
  border: ${p => p.theme.radii.sm} solid ${getBorderColor};
`;

export const Button = styled.button`
  padding: ${p => p.theme.spacing(1)};
  border: none;
  background-color: transparent;
  color: darkviolet;
  :hover {
    background-color: violet;
    color: white;
  }
`;
