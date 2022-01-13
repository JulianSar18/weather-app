function parseDate(weather) {
  const date = new Date(
    weather.dt * 1000 + weather.timezone * 1000
  );
  return date;
}
export default parseDate;
