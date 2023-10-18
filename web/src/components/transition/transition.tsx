import {TransitionProps} from "@mui/material/transitions";
import {animated, useSpring} from "@react-spring/web";
import Collapse from "@mui/material/Collapse";

export function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}