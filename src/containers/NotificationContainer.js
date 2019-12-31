import React from 'react';
import { connect } from 'react-redux';
import { config, Transition } from 'react-spring/renderprops';
import useToast from '../hooks/useToast';
import { Notification } from '../presenters/Notification';
import { recoverFrame } from '../state/frames';

const NotificationContainer = ({ lastClosed, recoverFrame }) => {
  const { visible, dismiss } = useToast(lastClosed);
  const onAction = () => {
    recoverFrame();
    dismiss();
  };
  const hiddenStyle = { opacity: 0, transform: 'translateY(30px)' };
  const shownStyle = { opacity: 1, transform: 'translateY(0)' };
  return (
    <Transition items={visible} config={config.gentle} from={hiddenStyle} enter={shownStyle} leave={hiddenStyle}>
      {visible => visible && (props => <Notification style={props} onAction={onAction} onClose={dismiss} />)}
    </Transition>
  );
};

const mapStateToProps = state => ({ lastClosed: state.frames.lastClosed });
export default connect(mapStateToProps, { recoverFrame })(NotificationContainer);
