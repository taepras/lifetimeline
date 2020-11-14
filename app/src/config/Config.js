export const Utils = {
  typeYear: (yearAd, yearMode = "ad", text = false) =>
    (text ? (yearMode == "ad" ? "ค.ศ. " : "พ.ศ. ") : "") +
    (yearMode == "ad" ? +yearAd : +yearAd + 543),
  Clamp: (x, min, max) => Math.min(Math.max(x, min), max),
};

export default {
  yearRangeMin: 1920,
  yearRangeMax: 2020,
  defaultYearMode: "ad",
  yearsOffset: 5,
  yearHeight: 120,
  spacePerEvent: 80,
  yOffsetCollapsedEvents: 60,
  xSpacePerCollapsedEvent: 16,
  xOffsetCollapsedEvents: 20,
};
