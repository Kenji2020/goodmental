import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VideoLecture = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.292 13.177h7.415c.692 0-.583-3.034-.583-3.034-.075-.18-.257-.296-.43-.368l-1.173-.54-.563-.474-.906.9.39 2.611c.002.01 0 .018-.006.025l-.408.56a.035.035 0 0 1-.056 0l-.409-.56a.034.034 0 0 1-.006-.025l.39-2.611-.905-.9-.563.475-1.173.54c-.173.07-.344.179-.43.367 0 0-1.275 3.034-.584 3.034Z"
      fill="#F2277E"
    />
    <Path
      d="M9 9.002c.894 0 2.094-1.117 2.114-2.991.013-1.3-.606-2.078-2.114-2.078S6.872 4.71 6.885 6.01C6.905 7.885 7.953 9 9 9Zm-.425-2.469c1.093.116 2.047-1.413 2.031-.044-.009.82-.77 2.058-1.606 2.058-.878 0-1.484-1.029-1.606-2.057-.133-1.115 1.914-.861 1.18.043Z"
      fill="#F2277E"
    />
    <Path
      d="M17.176 1.895H.824A.824.824 0 0 0 0 2.719V14.39c0 .455.369.824.824.824h16.352a.824.824 0 0 0 .824-.824V2.72a.824.824 0 0 0-.824-.824Zm-.412 12.084H1.236V3.13h15.528v10.85ZM0 16.525c0 .252.204.455.455.455h4.381v-.91H.455a.455.455 0 0 0-.455.455ZM17.545 16.07H6.597v.91h10.948a.455.455 0 1 0 0-.91ZM5.717 15.593a.548.548 0 0 0-.548.547v.77a.548.548 0 0 0 1.095 0v-.77a.548.548 0 0 0-.547-.547Z"
      fill="#F2277E"
    />
  </Svg>
)

export default VideoLecture;