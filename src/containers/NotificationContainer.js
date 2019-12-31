import React from 'react';
import { connect } from 'react-redux';
import useToast from '../hooks/useToast';
import { Notification } from '../presenters/Notification';
import { recoverFrame } from '../state/frames';

const NotificationContainer = ({ lastClosed, recoverFrame }) => {
  const { visible, dismiss } = useToast(lastClosed);
  const onAction = () => {
    recoverFrame();
    dismiss();
  };
  if (!visible) return null;
  return <Notification onAction={onAction} onClose={dismiss} />;
};

const mapStateToProps = state => ({ lastClosed: state.frames.lastClosed });
export default connect(mapStateToProps, { recoverFrame })(NotificationContainer);
