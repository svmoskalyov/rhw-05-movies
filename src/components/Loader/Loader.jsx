import { RotatingLines } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box p={6}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
};
