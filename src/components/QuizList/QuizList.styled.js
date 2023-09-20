import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ListItem = styled.li`
  flex-basis: calc((100% - 2 * 20px) / 3);
`;
