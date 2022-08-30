import * as React from "react"
import Svg, {G, Path, Defs, ClipPath } from "react-native-svg"

const House = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M3.478 15.363A3.128 3.128 0 0 1 .625 12.25V6.99c0-.974.456-1.893 1.231-2.484l4.25-3.24a3.127 3.127 0 0 1 3.79 0l.288.218a3.12 3.12 0 0 0-2.203.625L2.925 5.963a1.08 1.08 0 0 0-.425.859v6.272c0 .894.375 1.7.978 2.269Z"
        fill="#CEE1F2"
      />
      <Path
        d="M12.25 16h-8.5A3.755 3.755 0 0 1 0 12.25V6.99c0-1.162.553-2.277 1.475-2.98L5.725.769a3.755 3.755 0 0 1 4.547 0l1.353 1.028V1c0-.344.281-.625.625-.625s.625.281.625.625v2.06a.625.625 0 0 1-1.003.496L9.516 1.763a2.503 2.503 0 0 0-3.032 0l-4.25 3.24a2.514 2.514 0 0 0-.984 1.988v5.26c0 1.377 1.122 2.5 2.5 2.5h8.5c1.378 0 2.5-1.123 2.5-2.5V6.99a2.51 2.51 0 0 0-.972-1.994.623.623 0 1 1 .756-.994A3.777 3.777 0 0 1 16 6.991v5.26A3.755 3.755 0 0 1 12.25 16Z"
        fill="#3444F1"
      />
      <Path
        d="M7.531 8a.782.782 0 1 1-1.563 0 .782.782 0 0 1 1.563 0Zm1.719-.781a.782.782 0 1 0 0 1.563.782.782 0 0 0 0-1.563Zm-2.5 2.5a.782.782 0 1 0 0 1.563.782.782 0 0 0 0-1.563Zm2.5 0a.782.782 0 1 0 0 1.563.782.782 0 0 0 0-1.563Z"
        fill="#FFB31F"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default House;