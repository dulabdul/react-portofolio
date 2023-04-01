import ReactGA from 'react-ga4';

const useAnalyticsEventTracker = (category = 'OnClick Button') => {
  const eventTracker = (action = 'On Click', label = 'Report On Click') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
