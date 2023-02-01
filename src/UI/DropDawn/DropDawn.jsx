import React from 'react';

import cn from 'classnames'
import st from './DropDawn.module.scss'
export const DropDawn = ({ visible, isVisible, children, cords}) => {
  return (
    <div
      onClick={() => isVisible(false)}
      className={cn(st.window, visible && st.active)}
    >
      <div
        className={cn(st.window__dialog, visible && st.active)}
        style={{ left: cords.left, top: cords.top }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
