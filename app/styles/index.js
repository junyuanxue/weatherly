var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/sky.jpg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  h1: {
    fontSize: '3.3em',
    color: '#fff',
    fontWeight: 100,
    marginTop: '1em'
  },
  h2: {
    fontSize: '1.6em',
    color: '#fff',
    fontWeight: 100
  },
  headerContainer: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#44C4E8',
    color: '#fff',
    padding: 5
  },
  margin: {
    margin: '0.5em',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '4em auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '2em'
  },
  weather: {
    height: '5em',
    marginBottom: '1.5em'
  }
};

module.exports = styles;
