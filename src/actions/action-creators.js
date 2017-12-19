import * as actions from 'constants/action';

export function launchApp(data) {
  return {
    type: actions.launchApp,
    appView: true,
    app: data.app
  };
}

export function launchHome(data) {
  return {
    type: actions.launchHome,
    appView: false
  }
}
