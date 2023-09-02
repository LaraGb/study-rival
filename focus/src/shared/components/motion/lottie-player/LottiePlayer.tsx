import React from 'react';
import Lottie,{useLottieInteractivity, useLottie} from 'lottie-react';


export default function LottiePlayer({animation}:{animation:unknown}) {
  const options = {
    animationData: animation
  };
  const lottieObj = useLottie(options,{height:600});
  const animate = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        type:"play",
        visibility: [0.4, 0.6],
        frames: [0, 60],
      },
    ],
  });

  return animate
}
