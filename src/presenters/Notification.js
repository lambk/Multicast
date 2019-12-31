import React from 'react';
import styled from 'styled-components';

const NotificationPositioner = styled.footer`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const NotificationBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: hsl(210, 24%, 25%);
  box-shadow: -2px 2px 5px hsl(210, 20%, 15%);
  color: hsl(213, 7%, 76%);
  font-size: 14px;

  > *:not(:last-child) {
    margin-right: 15px;
  }
`;

const NotificationAction = styled.a`
  color: hsl(190, 50%, 75%);
  font-size: 13px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: hsl(190, 30%, 50%);
  }
`;

export const Notification = ({ style, onAction, onClose }) => {
  return (
    <NotificationPositioner>
      <NotificationBody style={style}>
        <span>Cast closed</span>
        <NotificationAction onClick={onAction}>Undo</NotificationAction>
        <NotificationAction onClick={onClose}>Close</NotificationAction>
      </NotificationBody>
    </NotificationPositioner>
  );
};
