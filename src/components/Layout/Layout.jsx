import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateRows="50px 1fr">
      <AppBar />
      <Outlet />
    </Box>
  );
};
