import React from 'react';
import { SvgIcon } from '@mui/material';

function KingCrownIcon(props) {
  return (
    <SvgIcon {...props}>
      {/* Add SVG paths for the crown icon */}
      <path d="M12 2l5 9h5v2h-5l3 11-9-8-9 8 3-11H5V11h5zM2 30h28v2H2v-2z"/>
    </SvgIcon>
  );
}

export default KingCrownIcon;
