import * as actions from 'constants/action';

export function uploadMessage(data) {
  return {
    type: actions.uploadeMessage,
    message: data.message
  };
}
