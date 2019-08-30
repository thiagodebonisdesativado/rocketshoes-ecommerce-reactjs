import React from 'react';

import ImgGIF from 'assets/images/error404.gif';
import Img from './styles';

export default function Error404Avatar() {
  return <Img src={ImgGIF} alt="Error 404 - Page Not Found" />;
}
