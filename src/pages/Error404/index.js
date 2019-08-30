import React from 'react';

import GlobalStyle from 'styles/Global';
import { Section, Title } from './styles';
import { Error404Avatar, BackToHome } from 'components';

export default function Error404() {
  return (
    <>
      <GlobalStyle theme="light" />
      <Section>
        <Error404Avatar />
        <Title>Look like you're lost</Title>
        <small>the page you are looking for not avaible!</small>
        <BackToHome />
      </Section>
    </>
  );
}
