import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Compass = (props) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M3.038 3.188a2.04 2.04 0 0 1 1.046-1.784 2.04 2.04 0 0 0-3.038 1.783 2.04 2.04 0 0 0 3.038 1.784 2.04 2.04 0 0 1-1.046-1.784Z"
        fill="#CEE1F2"
      />
      <Path
        d="M5.246 7.504v5.93c0 .75-.22 1.478-.638 2.102l-.006.007-.804 1.168a.666.666 0 0 1-1.095 0l-.804-1.168-.007-.007a3.816 3.816 0 0 1-.63-2.102v-5.83c0-.365.298-.664.664-.664.365 0 .664.299.664.664v5.83c0 .485.142.957.411 1.362l.253.368.252-.368c.269-.405.412-.877.412-1.362v-5.93c0-.365.299-.664.664-.664.365 0 .664.299.664.664ZM16.71 2.706l-1.169-.803-.006-.007a3.793 3.793 0 0 0-2.102-.634h-5.83a.666.666 0 0 0-.665.664c0 .365.3.664.664.664h5.83c.486 0 .957.143 1.362.412l.369.252-.369.253a2.456 2.456 0 0 1-1.361.411H7.47a.666.666 0 0 0-.665.664c0 .366.3.664.665.664h5.963c.75 0 1.477-.219 2.102-.637l.006-.007 1.169-.803A.666.666 0 0 0 17 3.25a.652.652 0 0 0-.289-.545Zm-10.867.432a2.71 2.71 0 0 1-2.706 2.706A2.71 2.71 0 0 1 .43 3.138c0-.505.14-.98.382-1.385l-.617-.62a.655.655 0 0 1 0-.937.665.665 0 0 1 .94 0l.62.621A2.642 2.642 0 0 1 3.138.432a2.71 2.71 0 0 1 2.706 2.706Zm-1.329 0a1.379 1.379 0 1 0-2.757.002 1.379 1.379 0 0 0 2.757-.002Z"
        fill="#3444F1"
      />
      <Path
        d="M6.574 17a.666.666 0 0 1-.664-.664c0-.365.299-.664.664-.664 5.017 0 9.098-4.08 9.098-9.098 0-.365.299-.664.664-.664.365 0 .664.299.664.664 0 2.786-1.086 5.402-3.055 7.371A10.355 10.355 0 0 1 6.575 17Z"
        fill="#FFB31F"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h17v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Compass;
