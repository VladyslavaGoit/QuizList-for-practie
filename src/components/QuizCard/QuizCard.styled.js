import styled from 'styled-components';

const getBorderColor = props => {
  switch (props.level) {
    case 'beginner':
      return 'lightskyblue';
    case 'intermediate':
      return 'antiquewhite';
    case 'advanced':
      return 'lightpink';
    default:
      return 'transparent';
  }
};

export const Wrapper = styled.div`
  padding: 8px;
  border: 2px solid ${getBorderColor};
`;
