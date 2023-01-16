import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Container maxW="8xl">
        <Outlet />
      </Container>
    </>
  );
}
