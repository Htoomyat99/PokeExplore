import * as React from 'react';
import Svg, {Defs, Path} from 'react-native-svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {pokeColor} from '../../src/utils/theme/color';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const GlobalIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    width={wp(6.5)}
    height={wp(6.5)}
    {...props}>
    <Defs></Defs>
    <Path
      fill={pokeColor.primary}
      d="M68.192 98.342c-3.555-2.541-8.223 1.153-9.874 5.135-1.435 3.472.333 6.662 3.886 7.687a8.901 8.901 0 0 0 5.996-.394c4.366-2.058 3.923-7.124 1.624-10.663a6.466 6.466 0 0 0-1.632-1.765ZM98.58 63.987a19.787 19.787 0 0 0-3.127.26A36.396 36.396 0 0 0 84.7 67.418c-1.709.87-3.303 1.954-5.039 2.775-1.75.826-3.933.8-5.54 1.84a4.742 4.742 0 0 0-2.096 2.831c-.52 2.214.934 3.971 2.764 4.985 2.664 1.476 5.358 2.904 7.98 4.449 2.213 1.307 4.692 3.265 7.429 2.841 1.932-.3 3.609-2.036 5.044-3.252a65.342 65.342 0 0 0 5.26-5.122c2.012-2.13 5.046-4.373 6.082-7.188a5.109 5.109 0 0 0-1.49-5.248 8.892 8.892 0 0 0-6.514-2.342Z"
      className="cls-1"
    />
    <Path
      fill={pokeColor.primary}
      d="m126.293 62.661-.013-.502c-.008-.273-.019-.55-.03-.823-.021-.46-.043-.918-.075-1.374l-.016-.293a58.622 58.622 0 0 0-.075-.968l-.016-.185A62.322 62.322 0 0 0 69.845 1.963l-.169-.013a51.391 51.391 0 0 0-1.588-.121 12.82 12.82 0 0 0-.446-.03 78.3 78.3 0 0 0-1.373-.064l-.478-.016a66.161 66.161 0 0 0-1.79-.03c-.47 0-.939.008-1.406.019-.236.005-.475.016-.713.022-.204.008-.405.013-.604.021l-1.068.056c-.037.003-.07.006-.107.006A62.318 62.318 0 0 0 1.935 58.478 58.487 58.487 0 0 0 1.69 64c0 .486.005.971.018 1.454l.016.52q.013.46.033.918c.013.218.024.432.035.65.013.255.032.51.048.767.016.244.032.491.054.735.016.215.034.432.056.647.024.274.048.547.078.82.018.194.043.387.061.583.02.201.038.4.065.599l.048.327a61.691 61.691 0 0 0 2.954 12.554.291.291 0 0 0 .014.046c.118.338.241.679.367 1.02.043.112.086.225.126.338q.157.422.322.837a20 20 0 0 0 .242.6c.08.205.16.409.247.607a62.085 62.085 0 0 0 29.49 31.656 1.284 1.284 0 0 0 .12.062c.315.158.634.314.953.464.21.102.422.204.63.3.103.049.205.094.304.143a62.155 62.155 0 0 0 26.03 5.664h.034c.518 0 1.039-.008 1.554-.022.083-.002.16-.008.239-.008.458-.013.915-.03 1.365-.053.022 0 .043-.003.065-.003a62.31 62.31 0 0 0 58.965-58.973c.002-.019.002-.038.005-.056.024-.456.04-.915.05-1.377l.009-.228c.016-.526.021-1.057.021-1.588V64c0-.445-.005-.893-.016-1.339Zm-62.292 55.426c-.228 0-.453-.008-.678-.01-.271-.004-.872-.586-1.103-.744q-.644-.443-1.277-.896a50.44 50.44 0 0 1-2.343-1.79 23.582 23.582 0 0 1-4.89-5.14c-2.886-4.373-2.355-9.436.281-13.79 1.882-3.107 4.819-5.556 7.044-8.433a31.839 31.839 0 0 0 5.668-10.53 11.346 11.346 0 0 0-1.727-10.163c-2.594-3.192-7.362-4.904-11.205-5.907a16.983 16.983 0 0 0-1.468-.312 31.504 31.504 0 0 0-3.295-.335 76.543 76.543 0 0 0-11.945.255c-3.483.338-7.143 1.42-10.44-.266-2.845-1.449-5.404-3.402-8.538-4.218a32.067 32.067 0 0 0-7.42-.8 54.098 54.098 0 0 1 64.871-43.85c.244 4.124 3.99 6.638 2.06 11.02-2.602 5.908-9.935 7.663-12.935 13.257a7.312 7.312 0 0 0 .32 7.814 55.421 55.421 0 0 1 2.973 5.277c1.306 2.528 2.715 5.83 5.302 7.32 7.566 4.363 8.178-9.222 13.38-10.08 2.807-.465 4.393 1.124 5.715 3.364 1.578 2.667 2.842 5.001 6.174 5.653a22.37 22.37 0 0 0 6.335 0c1.036-.099 12.088-1.846 11.956-2.439a54.094 54.094 0 0 1-52.815 65.743Z"
      className="cls-1"
    />
  </Svg>
);
export default GlobalIcon;
