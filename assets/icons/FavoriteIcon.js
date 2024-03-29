import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: title */
const FavoriteIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2-3h24v24H-2z" />
      <Path
        fill={props.color}
        d="M14.5 0c-1.74 0-3.41.81-4.5 2.09C8.91.81 7.24 0 5.5 0 2.42 0 0 2.42 0 5.5c0 3.78 3.4 6.86 8.55 11.54L10 18.35l1.45-1.32C16.6 12.36 20 9.28 20 5.5 20 2.42 17.58 0 14.5 0Zm-4.4 15.55-.1.1-.1-.1C5.14 11.24 2 8.39 2 5.5 2 3.5 3.5 2 5.5 2c1.54 0 3.04.99 3.57 2.36h1.87C11.46 2.99 12.96 2 14.5 2c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05Z"
      />
    </G>
  </Svg>
);
export default FavoriteIcon;
