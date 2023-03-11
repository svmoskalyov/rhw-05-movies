import styled from 'styled-components';

export const List = styled.ul``;

export const Item = styled.li`
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const Author = styled.h3`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Content = styled.p`
  padding-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  text-indent: 30px;
`;
