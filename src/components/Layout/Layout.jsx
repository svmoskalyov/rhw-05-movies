import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateRows="50px 1fr">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
