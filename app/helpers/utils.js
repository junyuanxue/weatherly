function getDate (unixTimeStamp) {
  var date = new Date(unixTimeStamp * 1000).toString();
  return date.split(' ').slice(0, 3).join(' ');
}

module.exports = getDate;
