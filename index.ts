function getMillisecondsUntilMidnight(): number {
  const now = new Date();
  const targetTime = new Date(now);

  targetTime.setDate(now.getDate() + 1); // Set to the next day
  targetTime.setHours(0);
  targetTime.setMinutes(0);
  targetTime.setSeconds(0);
  targetTime.setMilliseconds(0);

  return targetTime.getTime() - now.getTime();
}

function refreshAtMidnight(): void {
  setTimeout(() => {
    window.location.reload();
    refreshAtMidnight(); // Schedule the next refresh for the day after
  }, getMillisecondsUntilMidnight());
}

export default refreshAtMidnight;