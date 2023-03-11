import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const List = styled.ul``;

export const Item = styled.li`
  padding: ${p => p.theme.space[1]}px 0;
  font-size: ${p => p.theme.fontSizes.m};
`;
