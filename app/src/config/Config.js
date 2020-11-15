import { useState, useRef, useCallback, useEffect } from 'react';

export const Utils = {
  typeYear: (yearAd, yearMode = "ad", text = false) =>
    (text ? (yearMode == "ad" ? "ค.ศ. " : "พ.ศ. ") : "") +
    (yearMode == "ad" ? +yearAd : +yearAd + 543),
  Clamp: (x, min, max) => Math.min(Math.max(x, min), max),
};

export const useStateWithPromise = (initialState) => {
  const [state, setState] = useState(initialState);
  const resolverRef = useRef(null);

  useEffect(() => {
    if (resolverRef.current) {
      resolverRef.current(state);
      resolverRef.current = null;
    }
    /**
     * Since a state update could be triggered with the exact same state again,
     * it's not enough to specify state as the only dependency of this useEffect.
     * That's why resolverRef.current is also a dependency, because it will guarantee,
     * that handleSetState was called in previous render
     */
  }, [resolverRef.current, state]);

  const handleSetState = useCallback((stateAction) => {
    setState(stateAction);
    return new Promise(resolve => {
      resolverRef.current = resolve;
    });
  }, [setState])

  return [state, handleSetState];
};

export default {
  yearRangeMin: 1920,
  yearRangeMax: 2020,
  defaultYearMode: "ad",
  yearsOffset: 2,
  yearHeight: 120,
  spacePerEvent: 80,
  yOffsetCollapsedEvents: 60,
  xSpacePerCollapsedEvent: 16,
  xOffsetCollapsedEvents: 20,
};
