import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  padding-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Character = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;
