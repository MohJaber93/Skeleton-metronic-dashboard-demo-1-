import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";

const CountUpdater = ({ startNumber, onCounterFinished }) => {
  const [count, setCount] = React.useState(startNumber);

  React.useEffect(() => {
    let timer;
    if (count !== 0) {
      timer = setTimeout(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
    } else {
      setCount(startNumber);
      onCounterFinished();
    }

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, startNumber]);

  return (
    <Tooltip title="تحديث" placement="right">
      <IconButton
        color="primary"
        onClick={() => {
          onCounterFinished();
          setCount(startNumber);
        }}
      >
        {count}
        <TimerIcon />
      </IconButton>
    </Tooltip>
  );
};

export default CountUpdater;
