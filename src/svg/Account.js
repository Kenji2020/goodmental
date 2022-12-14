import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Account = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.697 16.5a.75.75 0 1 0 1.5 0c0-2.647 1.524-4.99 3.899-6.098a5.215 5.215 0 0 0 5.71-.005 6.706 6.706 0 0 1 3.89 6.104.75.75 0 1 0 1.501-.001 8.196 8.196 0 0 0-2.417-5.833 8.308 8.308 0 0 0-1.778-1.338A5.225 5.225 0 0 0 14.196 6 5.256 5.256 0 0 0 8.947.75 5.256 5.256 0 0 0 3.697 6c0 1.26.447 2.417 1.19 3.322A8.2 8.2 0 0 0 .697 16.5Zm8.25-14.25A3.754 3.754 0 0 1 12.697 6a3.754 3.754 0 0 1-3.75 3.75A3.754 3.754 0 0 1 5.197 6a3.754 3.754 0 0 1 3.75-3.75Z"
      fill="#fff"
    />
  </Svg>
)

export default Account;
